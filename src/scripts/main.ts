import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

/* ───────────── smooth scroll ───────────── */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 0.95 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToTarget(hash: string) {
  const el = hash === '#top' ? document.body : $(hash);
  if (!el) return;
  if (lenis) lenis.scrollTo(el as HTMLElement, { duration: 1.6 });
  else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}

/* ───────────── text scramble ───────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/—_<>*';
function scramble(el: HTMLElement, to = el.textContent || '', dur = 0.7) {
  if (reduced) { el.textContent = to; return; }
  const from = el.textContent || '';
  const len = Math.max(from.length, to.length);
  const state = { p: 0 };
  gsap.killTweensOf(state);
  gsap.to(state, {
    p: 1, duration: dur, ease: 'none',
    onUpdate() {
      let out = '';
      for (let i = 0; i < len; i++) {
        const settle = i / len;
        if (state.p > settle + 0.25) out += to[i] ?? '';
        else if (state.p > settle) out += to[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        else out += from[i] ?? '';
      }
      el.textContent = out;
    },
    onComplete() { el.textContent = to; },
  });
}

$$('[data-scramble]').forEach((el) => {
  const text = el.textContent || '';
  el.addEventListener('mouseenter', () => scramble(el, text, 0.5));
});

// Wraps every word in a span but leaves the whitespace (and <b>/<em> tags) untouched.
function splitWords(el: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  const walk = (n: Node) => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      for (const part of (n.textContent || '').split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); continue; }
        const s = document.createElement('span');
        s.className = 'w';
        s.textContent = part;
        frag.appendChild(s);
        out.push(s);
      }
      n.parentNode!.replaceChild(frag, n);
    } else Array.from(n.childNodes).forEach(walk);
  };
  Array.from(el.childNodes).forEach(walk);
  return out;
}

/* ───────────── clock ───────────── */
function tick() {
  $$('.clock__time').forEach((el) => {
    el.textContent = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit', minute: '2-digit', timeZone: el.dataset.tz || 'Asia/Kolkata',
    }).format(new Date());
  });
}
tick();
setInterval(tick, 10_000);

/* ───────────── copy email ───────────── */
$$<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const hint = $('.copy__hint', btn)!;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy!);
      hint.textContent = 'copied ✓';
    } catch {
      location.href = `mailto:${btn.dataset.copy}`;
    }
    setTimeout(() => (hint.textContent = 'copy'), 2200);
  });
});

/* ───────────── menu ───────────── */
const burger = $<HTMLButtonElement>('.burger');
function setMenu(open: boolean) {
  root.classList.toggle('menu-open', open);
  burger?.setAttribute('aria-expanded', String(open));
  burger?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  if (open) {
    lenis?.stop();
    gsap.fromTo('.menu li', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.06, ease: 'expo.out', delay: 0.15 });
    gsap.fromTo('.menu__foot', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.5 });
  } else {
    lenis?.start();
  }
}
burger?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

$$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const hash = a.getAttribute('href')!;
    if (hash.length < 2) return;
    e.preventDefault();
    const wasOpen = root.classList.contains('menu-open');
    setMenu(false);
    setTimeout(() => scrollToTarget(hash), wasOpen ? 450 : 0);
  });
});

/* ───────────── cursor + magnetic ───────────── */
if (finePointer && !reduced) {
  const cursor = $('.cursor')!;
  const label = $('.cursor__label', cursor)!;
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
  addEventListener('pointermove', (e) => { cursor.classList.add('is-on'); xTo(e.clientX); yTo(e.clientY); });
  document.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));
  $$('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => { label.textContent = el.dataset.cursor!; cursor.classList.add('has-label'); });
    el.addEventListener('pointerleave', () => cursor.classList.remove('has-label'));
  });

  $$('[data-magnetic]').forEach((el) => {
    const mx = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
    const my = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      mx((e.clientX - (r.left + r.width / 2)) * 0.35);
      my((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener('pointerleave', () => { mx(0); my(0); });
  });
}

/* ───────────── hero word slot ───────────── */
function startSlot() {
  const words = $$('.slot > span');
  if (words.length < 2) return;
  let i = 0;
  if (reduced) return;
  setInterval(() => {
    const cur = words[i];
    i = (i + 1) % words.length;
    const next = words[i];
    gsap.to(cur, { yPercent: -110, duration: 0.8, ease: 'expo.inOut' });
    gsap.fromTo(next, { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: 'expo.inOut' });
  }, 2300);
}

/* ───────────── preloader (particles form the name, then scatter) ───────────── */
type P = { x: number; y: number; sx: number; sy: number; tx: number; ty: number; vx: number; vy: number; d: number; s: number };

async function preloader(): Promise<void> {
  const wrap = $('.preloader');
  if (!wrap) return;
  if (reduced) { wrap.remove(); return; }

  lenis?.stop();
  scrollTo(0, 0);

  const canvas = $<HTMLCanvasElement>('.preloader__canvas', wrap)!;
  const ctx = canvas.getContext('2d')!;
  const count = $('.preloader__count', wrap)!;
  const log = $('.preloader__log', wrap)!;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const W = innerWidth, H = innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  try { await Promise.race([document.fonts.load('800 100px "Archivo Variable"'), new Promise((r) => setTimeout(r, 900))]); } catch {}

  // Rasterise the name off-screen and keep the filled pixels as particle targets.
  const off = document.createElement('canvas');
  const octx = off.getContext('2d')!;
  off.width = W; off.height = H;
  let size = H * 0.42;
  octx.fillStyle = '#fff';
  octx.textAlign = 'center';
  octx.textBaseline = 'middle';
  (octx as any).fontStretch = 'extra-condensed';
  octx.font = `800 ${size}px "Archivo Variable", "Arial Narrow", sans-serif`;
  const tw = octx.measureText('ANKITHA').width;
  if (tw > W * 0.84) {
    size *= (W * 0.84) / tw;
    octx.font = `800 ${size}px "Archivo Variable", "Arial Narrow", sans-serif`;
  }
  octx.fillText('ANKITHA', W / 2, H * 0.46);
  const data = octx.getImageData(0, 0, W, H).data;
  const step = W < 700 ? 4 : 5;
  const targets: [number, number][] = [];
  for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step) if (data[(y * W + x) * 4 + 3] > 140) targets.push([x, y]);

  const parts: P[] = targets.map(([tx, ty]) => {
    const a = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.6) * Math.max(W, H) * 0.65;
    const sx = W / 2 + Math.cos(a) * r, sy = H / 2 + Math.sin(a) * r * 0.6;
    return { x: sx, y: sy, sx, sy, tx, ty, vx: 0, vy: 0, d: Math.random() * 0.35, s: Math.random() < 0.12 ? 2.2 : 1.4 };
  });
  // a sparse field of stars that never join the name
  const dust = Array.from({ length: 220 }, () => ({ x: Math.random() * W, y: Math.random() * H, s: Math.random() * 1.4 + 0.3, a: Math.random() * 0.5 + 0.1 }));

  const lines = ['booting portfolio', 'loading models', 'warming up the gpu', 'routing prompts', 'ready'];
  const state = { t: 0, burst: 0 };
  const ease = (x: number) => 1 - Math.pow(1 - x, 4);

  let raf = 0;
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    for (const d of dust) { ctx.fillStyle = `rgba(235,231,222,${d.a * (1 - state.burst)})`; ctx.fillRect(d.x, d.y, d.s, d.s); }
    for (const p of parts) {
      if (state.burst > 0) {
        p.x += p.vx; p.y += p.vy; p.vx *= 1.04; p.vy *= 1.04;
      } else {
        const k = ease(Math.min(1, Math.max(0, (state.t - p.d) / (1 - p.d))));
        const jitter = (1 - k) * 2;
        p.x = p.sx + (p.tx - p.sx) * k + (Math.random() - 0.5) * jitter;
        p.y = p.sy + (p.ty - p.sy) * k + (Math.random() - 0.5) * jitter;
      }
      const lime = p.s > 2 && state.t > 0.9;
      ctx.fillStyle = lime ? `rgba(201,242,77,${1 - state.burst})` : `rgba(235,231,222,${0.9 * (1 - state.burst)})`;
      ctx.fillRect(p.x, p.y, p.s, p.s);
    }
    raf = requestAnimationFrame(draw);
  };
  draw();

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete() { cancelAnimationFrame(raf); wrap.remove(); lenis?.start(); },
    });
    tl.to(state, {
      t: 1, duration: 2.1, ease: 'power2.inOut',
      onUpdate() {
        count.textContent = String(Math.round(state.t * 100)).padStart(3, '0');
        log.textContent = lines[Math.min(lines.length - 1, Math.floor(state.t * lines.length))];
      },
    })
      .add(() => {
        for (const p of parts) {
          const a = Math.atan2(p.y - H / 2, p.x - W / 2) + (Math.random() - 0.5) * 0.6;
          const v = 2 + Math.random() * 6;
          p.vx = Math.cos(a) * v; p.vy = Math.sin(a) * v;
        }
      }, '+=0.25')
      .to(state, { burst: 1, duration: 0.9, ease: 'power2.in' }, '<')
      .to(wrap, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '<0.25')
      .add(resolve, '<0.35');
  });
}

/* ───────────── hero intro ───────────── */
function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.hero__portrait', { clipPath: 'inset(100% 0 0 0)', duration: 1.5, ease: 'expo.inOut' })
    .from('.hero__portrait img', { scale: 1.35, duration: 2 }, '<')
    .from('.hero__name .word, .hero__family', { yPercent: 110, duration: 1.4, stagger: 0.08 }, '<0.35')
    .from('.hero__label, .hero__ticker, .hero__side > *, .hero__foot', { y: 24, opacity: 0, duration: 1.1, stagger: 0.07 }, '<0.3')
    .from('.top, .rail, .hud', { opacity: 0, duration: 1 }, '<')
    .add(() => { const m = $('.top__mid'); if (m) scramble(m, m.textContent || '', 1); startSlot(); }, '<0.2');
}

/* ───────────── scroll-driven pieces ───────────── */
function setupScroll() {
  // theme + rail follow the section in the middle of the screen
  const railNum = $('.rail__num');
  const railLabel = $('.rail__label');
  const railBar = $('.rail__line i');
  $$('section[data-theme]').forEach((sec) => {
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle(self) {
        if (!self.isActive) return;
        root.dataset.theme = sec.dataset.theme;
        if (sec.dataset.rail && railNum && railLabel && railNum.textContent !== sec.dataset.rail) {
          scramble(railNum, sec.dataset.rail, 0.4);
          scramble(railLabel, sec.dataset.label || '', 0.6);
        }
      },
      onUpdate(self) { if (self.isActive && railBar) gsap.set(railBar, { scaleY: self.progress }); },
    });
  });

  // scroll percentage HUD + header hide on scroll down
  const pct = $('.hud__pct');
  const top = $('.top');
  let lastY = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate(self) {
      if (pct) pct.textContent = String(Math.round(self.progress * 100)).padStart(3, '0');
      const y = self.scroll();
      if (top && !root.classList.contains('menu-open')) top.classList.toggle('is-hidden', y > 300 && y > lastY);
      lastY = y;
    },
  });

  if (reduced) return;

  // hero parallax out
  gsap.to('.hero__portrait img', { yPercent: 12, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__copy', { yPercent: -18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // word-by-word reading reveal
  $$('.about .reveal-words').forEach((el) => {
    gsap.fromTo(splitWords(el), { opacity: 0.13 }, {
      opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 40%', scrub: true },
    });
  });

  // headline character rises
  $$('.reveal-chars').forEach((el) => {
    const split = SplitText.create(el, { type: 'words,chars', mask: 'chars' });
    gsap.from(split.chars, {
      yPercent: 110, duration: 1.1, stagger: 0.025, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
  $$('.reveal-lines').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines' });
    gsap.from(split.lines, { yPercent: 105, duration: 1.2, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 82%' } });
  });

  // simple rise-ins
  const rise = '.stats li, .dict, .code, .entry, .skills__group, .certs li, .more__list li, .steps li, .contact__links > *, .foot__cols > div, .sec-head';
  gsap.set(rise, { y: 40, opacity: 0 });
  ScrollTrigger.batch(rise, {
    start: 'top 90%', once: true,
    onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'expo.out' }),
  });

  // code card types itself
  const code = $('[data-type-code] code');
  if (code) {
    const chars: HTMLElement[] = [];
    const walk = (n: Node) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const ch of n.textContent || '') {
          const s = document.createElement('span');
          s.textContent = ch;
          s.style.opacity = '0';
          frag.appendChild(s);
          chars.push(s);
        }
        n.parentNode!.replaceChild(frag, n);
      } else n.childNodes.forEach(walk);
    };
    Array.from(code.childNodes).forEach(walk);
    const caret = document.createElement('span');
    caret.className = 'caret';
    code.appendChild(caret);
    gsap.to(chars, { opacity: 1, duration: 0.01, stagger: 0.008, ease: 'none', scrollTrigger: { trigger: code, start: 'top 80%' } });
  }
}

/* ───────────── counters ───────────── */
function countUp(el: HTMLElement, delay = 0) {
  const to = parseFloat(el.dataset.count || '0');
  const isInt = el.hasAttribute('data-int');
  const o = { v: 0 };
  gsap.to(o, {
    v: to, duration: reduced ? 0 : 1.8, delay, ease: 'power3.out',
    onUpdate() { el.textContent = isInt ? Math.round(o.v).toLocaleString('en-US') : o.v.toFixed(1); },
  });
}
function setupCounters() {
  $$('.stats [data-count]').forEach((el, i) => {
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => countUp(el, i * 0.08) });
  });
}

/* ───────────── project visuals ───────────── */
function setupVisuals() {
  $$('.vis').forEach((vis) => {
    ScrollTrigger.create({
      trigger: vis, start: 'top 75%', once: true,
      onEnter() {
        vis.classList.add('is-in');
        $$('[data-count]', vis).forEach((el) => countUp(el, 0.2));
        const typer = $('[data-type]', vis);
        if (typer) {
          const text = typer.dataset.type || '';
          if (reduced) { typer.textContent = text; vis.classList.add('is-done'); return; }
          const o = { n: 0 };
          gsap.to(o, {
            n: text.length, duration: text.length * 0.035, ease: 'none', delay: 0.3,
            onUpdate() { typer.textContent = text.slice(0, Math.round(o.n)); },
            onComplete() { vis.classList.add('is-done'); },
          });
        } else vis.classList.add('is-done');
      },
    });
  });
}

/* ───────────── timeline: the big year rolls between chapters ───────────── */
function setupPath() {
  const cols = $$('.year__col');
  const idx = $('.path__idx');
  const groups = $$('.path__group');
  if (!cols.length || !groups.length) return;
  const setYear = (year: string, i: number, instant = false) => {
    cols.forEach((col, c) => {
      const d = Number(year[c]);
      gsap.to($('.year__digits', col), { yPercent: -10 * d, duration: instant ? 0 : 1.1, delay: instant ? 0 : c * 0.07, ease: 'expo.inOut' });
    });
    if (idx) idx.textContent = String(i + 1);
  };
  setYear(groups[0].dataset.year!, 0, true);
  groups.forEach((g, i) => {
    ScrollTrigger.create({
      trigger: g, start: 'top 55%', end: 'bottom 55%',
      onToggle(self) { if (self.isActive) setYear(g.dataset.year!, i); },
    });
  });
  gsap.to('.path__progress i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.path__list', start: 'top 55%', end: 'bottom 55%', scrub: true } });
}

/* ───────────── work: stacked case studies ───────────── */
function setupWork() {
  const cases = $$('.case');
  const index = $('.work__index');
  const marks = $$('.work__index li');

  cases.forEach((c, i) => {
    ScrollTrigger.create({
      trigger: c, start: 'top 50%', end: 'bottom 50%',
      onToggle(self) { if (self.isActive) marks.forEach((m, j) => m.classList.toggle('on', j === i)); },
    });
  });
  if (index) {
    ScrollTrigger.create({
      trigger: '.cases', start: 'top 60%', end: 'bottom 40%',
      onToggle(self) { index.classList.toggle('is-on', self.isActive); },
    });
  }

  if (reduced) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    cases.forEach((c, i) => {
      const next = cases[i + 1];
      if (next) {
        const shade = document.createElement('div');
        shade.className = 'case__shade';
        c.appendChild(shade);
        const st = { trigger: next, start: 'top bottom', end: 'top top', scrub: true };
        gsap.to(c.querySelector('.case__inner'), { scale: 0.9, yPercent: -4, ease: 'none', scrollTrigger: st });
        gsap.to(shade, { opacity: 0.65, ease: 'none', scrollTrigger: st });
      }
      gsap.fromTo(c.querySelector('.case__big'), { yPercent: 30 }, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    return () => $$('.case__shade').forEach((s) => s.remove());
  });

  cases.forEach((c) => {
    const title = c.querySelector('.case__title') as HTMLElement;
    const split = SplitText.create(title, { type: 'words,chars', mask: 'lines' });
    const tl = gsap.timeline({ scrollTrigger: { trigger: c, start: 'top 60%' } });
    tl.from(split.chars, { yPercent: 110, duration: 1.1, stagger: 0.03, ease: 'expo.out' })
      .from(c.querySelectorAll('.case__kicker, .case__role, .case__tagline, .case__body, .case__points li, .case__stack, .case__link, .case__private'), { y: 26, opacity: 0, duration: 1, stagger: 0.05, ease: 'expo.out' }, '<0.1')
      .from(c.querySelector('.case__visual'), { y: 80, opacity: 0, rotate: 2, duration: 1.4, ease: 'expo.out' }, '<');
  });
}

/* ───────────── manifesto ───────────── */
function setupMotto() {
  if (reduced) return;
  const line = $('.motto__line');
  const big = $('.motto__big');
  if (!line || !big) return;
  const a = splitWords(line);
  const b = splitWords(big);
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.motto', start: 'top top', end: 'bottom bottom', scrub: true } });
    tl.fromTo(a, { opacity: 0.12 }, { opacity: 1, stagger: 0.1, ease: 'none' })
      .from('.motto__sub', { opacity: 0, y: 20, ease: 'none' })
      .fromTo(b, { opacity: 0.1 }, { opacity: 1, stagger: 0.1, ease: 'none' });
    gsap.fromTo('.motto__star', { rotate: 0, scale: 0.7 }, { rotate: 140, scale: 1.1, ease: 'none', scrollTrigger: { trigger: '.motto', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  mm.add('(max-width: 900px)', () => {
    gsap.from([...a, ...b], { opacity: 0.12, stagger: 0.05, duration: 0.6, scrollTrigger: { trigger: '.motto', start: 'top 70%' } });
  });
}

/* ───────────── marquee leans with scroll speed ───────────── */
function setupMarquee() {
  if (!lenis) return;
  const tracks = $$('.marquee__track');
  const skew = gsap.quickTo(tracks, 'skewX', { duration: 0.5, ease: 'power3' });
  lenis.on('scroll', (l: Lenis) => skew(gsap.utils.clamp(-12, 12, l.velocity * -0.35)));
}

/* ───────────── footer: dot-matrix name that moves out of the cursor's way ───────────── */
function setupFooterName() {
  const canvas = $<HTMLCanvasElement>('.foot__name');
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  let dots: { x: number; y: number; ox: number; oy: number; r: number; vx: number; vy: number }[] = [];
  let W = 0, H = 0, dpr = 1, running = false, raf = 0;
  const mouse = { x: -9999, y: -9999 };

  const build = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const off = document.createElement('canvas');
    off.width = W; off.height = H;
    const o = off.getContext('2d')!;
    (o as any).fontStretch = 'extra-condensed';
    let size = H * 1.18;
    o.font = `800 ${size}px "Archivo Variable", "Arial Narrow", sans-serif`;
    const w = o.measureText('ANKITHA').width;
    if (w > W * 0.98) { size *= (W * 0.98) / w; o.font = `800 ${size}px "Archivo Variable", "Arial Narrow", sans-serif`; }
    o.fillStyle = '#fff';
    o.textAlign = 'center';
    o.textBaseline = 'alphabetic';
    o.fillText('ANKITHA', W / 2, H * 0.92);
    const data = o.getImageData(0, 0, W, H).data;
    const step = Math.max(4, Math.round(W / 210));
    dots = [];
    for (let y = 0; y < H; y += step) {
      for (let x = 0; x < W; x += step) {
        if (data[(y * W + x) * 4 + 3] > 120) {
          // halftone: dots shrink towards the bottom, with a little noise
          const r = step * (0.42 - (y / H) * 0.22) * (0.75 + Math.random() * 0.35);
          dots.push({ x, y, ox: x, oy: y, r, vx: 0, vy: 0 });
        }
      }
    }
  };

  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    const R = Math.max(80, W * 0.07);
    for (const d of dots) {
      const dx = d.x - mouse.x, dy = d.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < R) {
        const f = (1 - dist / R) * 3.2;
        d.vx += (dx / (dist || 1)) * f; d.vy += (dy / (dist || 1)) * f;
      }
      d.vx += (d.ox - d.x) * 0.06; d.vy += (d.oy - d.y) * 0.06;
      d.vx *= 0.82; d.vy *= 0.82;
      d.x += d.vx; d.y += d.vy;
      const moved = Math.min(1, Math.hypot(d.x - d.ox, d.y - d.oy) / 18);
      ctx.fillStyle = moved > 0.15 ? `rgba(201,242,77,${0.5 + moved * 0.5})` : 'rgba(235,231,222,.92)';
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (running) raf = requestAnimationFrame(frame);
  };

  canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  canvas.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

  document.fonts.ready.then(() => {
    build();
    frame();
    new IntersectionObserver(([e]) => {
      running = e.isIntersecting && !reduced;
      cancelAnimationFrame(raf);
      if (running) frame();
    }).observe(canvas);
    let t = 0;
    addEventListener('resize', () => { clearTimeout(t); t = window.setTimeout(() => { build(); frame(); }, 200); });
  });
}

/* ───────────── boot ───────────── */
async function boot() {
  await document.fonts.ready.catch(() => {});
  setupScroll();
  setupCounters();
  setupVisuals();
  setupPath();
  setupWork();
  setupMotto();
  setupMarquee();
  setupFooterName();
  ScrollTrigger.refresh();

  if (reduced) { startSlot(); return; }
  await preloader();
  heroIntro();
}

if ($('.hero')) boot();
else { root.dataset.theme = 'dark'; }
