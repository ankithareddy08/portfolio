// Everything the page says lives here. Edit copy, links and dates in this file only.

export const profile = {
  first: 'Ankitha',
  last: 'Reddy',
  family: 'Atukula',
  full: 'Ankitha Reddy Atukula',
  role: 'AI Product Engineer',
  city: 'Hyderabad',
  country: 'IN',
  timezone: 'Asia/Kolkata',
  email: 'ankithareddy0804@gmail.com',
  github: 'https://github.com/ankithareddy08',
  linkedin: 'https://www.linkedin.com/in/ankitha-reddy-2a15862ab',
  resume: '/ankitha-reddy-atukula-resume.pdf',
  // Drop your photo in /public/media/ and point this at it (portrait, roughly 4:5).
  portrait: '/media/ankitha-portrait.jpg',
  status: 'Open to full-time roles',
};

// Rotating word in the hero ("AI product engineer / ___")
export const heroWords = ['full-stack developer', 'UI/UX designer', 'LLM orchestrator', 'MVP shipper', 'Figma to prod'];

export const stats = [
  { value: '6', unit: 'mo', label: 'at Flashback Labs, building next to the founders' },
  { value: '4', unit: '', label: 'products built and shipped in one internship' },
  { value: '7', unit: '', label: 'AI coding agents in the daily toolkit' },
  { value: '100', unit: '%', label: 'in Class X boards. Old habit, still there' },
];

// The dated path. Grouped by year; the giant year on the left follows these groups.
export const timeline = [
  {
    year: '2019',
    items: [
      {
        when: '2019 — 2022',
        title: 'School, Telangana State Board',
        where: 'Class X · Class XII',
        body: 'Finished Class X with 100% and Class XII with 88%. Maths first, then computers.',
        tags: ['Class X · 100%', 'Class XII · 88%'],
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        when: '2022 — 2026',
        title: 'B.Tech, Computer Science & Engineering',
        where: 'Sree Chaitanya Institute of Technological Sciences',
        body: 'Four years of CS fundamentals, and the place I started building things on my own time.',
        tags: ['79%', 'CSE'],
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        when: '2024',
        title: 'Flipkart GRID 6.0',
        where: 'National engineering challenge · Participant',
        body: 'First taste of building against a real problem statement and a hard deadline.',
        tags: ['Hackathon'],
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        when: '2025',
        title: 'Learning the web by rebuilding it',
        where: 'GitHub · personal projects',
        body: 'A Figma landing page redesign, a Netflix clone, the Little Taco Shop site and a first portfolio. HTML, CSS, JavaScript and a lot of inspecting other people’s sites.',
        tags: ['HTML/CSS', 'JavaScript', 'Figma'],
      },
    ],
  },
  {
    year: '2026',
    items: [
      {
        when: 'Mar — Apr 2026',
        title: 'AI side projects & a hackathon',
        where: 'AI Flow · Project Aura · Aura Sync · Project Chronos',
        body: 'A one-click text tool on LLMs, an AI journal that themes itself to your mood, a Gemini + ML meeting scheduler, and a live 3D Earth telemetry dashboard.',
        tags: ['Gemini', 'React Native', 'Next.js', 'WebGL'],
      },
      {
        when: '6 months · 2026',
        title: 'Software Engineer Intern',
        where: 'Flashback Labs',
        body: 'Built four products end to end with the founders: Reqsy AI, an enterprise catering platform, Stevie Intel and a link tracker. Design, frontend, backend, models, testing and deploys.',
        tags: ['Reqsy AI', 'CaterCore', 'Stevie Intel', 'Link Tracker'],
        now: false,
      },
      {
        when: '2026',
        title: 'Gen AI & Frontend Lead, Orian Builder',
        where: 'Group project · Desktop AI studio',
        body: 'A local AI builder that turns requirements into deployed apps. Led its media studio (image, video, music and 3D on the user’s own GPU, one-click YouTube and Instagram publishing) and the full UI redesign.',
        tags: ['Electron', 'Diffusers', 'FastAPI'],
      },
      {
        when: 'Now',
        title: 'Graduating, and looking for the next team',
        where: 'Hyderabad · open to remote',
        body: 'Looking for a product team that ships AI to real users and wants someone who can own a feature from Figma to production.',
        tags: ['Open to work'],
        now: true,
      },
    ],
  },
];

export type Project = {
  slug: string;
  num: string;
  title: string;
  kicker: string; // who/where
  year: string;
  role: string;
  tagline: string;
  body: string;
  points: string[];
  stack: string[];
  link?: { label: string; href: string };
  tint: string; // panel tint
  visual: 'reqsy' | 'orian' | 'catering' | 'stevie' | 'tracker' | 'restaurant';
};

export const projects: Project[] = [
  {
    slug: 'reqsy',
    num: '01',
    title: 'Reqsy AI',
    kicker: 'Flashback Labs',
    year: '2026',
    role: 'Built end to end',
    tagline: 'Tells a founder, with sources, whether their startup idea holds up.',
    body: 'Reqsy interviews the founder about the idea, researches it on the live web, checks every claim against a real source and scores it 0–10 on a fixed rubric. A strong idea also gets a pitch deck and a landing page.',
    points: [
      'Routes work across GPT, Claude, Gemini and local Qwen by cost and speed',
      'Gemini Live voice: founders can talk the idea through out loud',
      'Market simulations and an evidence-backed, scored verdict',
    ],
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Gemini Live', 'Claude', 'GPT', 'Qwen', 'Tavily'],
    tint: '#11140c',
    visual: 'reqsy',
  },
  {
    slug: 'orian',
    num: '02',
    title: 'Orian Builder',
    kicker: 'Group project · Legion Studios',
    year: '2026',
    role: 'Gen AI & Frontend Lead',
    tagline: 'Describe an app and it builds and deploys it, then makes the images, video and music to launch it.',
    body: 'A local-first AI builder, like Lovable or Bolt but running on your own machine. An agent turns requirements into web apps, mobile apps and APIs and ships them to Vercel or Netlify in one click. I led its media studio and redesigned the whole app UI.',
    points: [
      'Prompt to live app: the agent plans, writes and auto-fixes the code, then deploys in one click',
      'Image, video, ACE-Step music (on 4 GB VRAM) and TripoSR 3D generated on your own GPU, with a GGUF Z-Image-Turbo model published on Hugging Face',
      'One-click YouTube and Instagram publishing with scheduling, plus FFmpeg video editing and P2P sharing',
    ],
    stack: ['Electron', 'React', 'TypeScript', 'Python', 'Diffusers', 'llama.cpp', 'TensorRT'],
    link: { label: 'View repo', href: 'https://github.com/srideep47/OrianBuilder' },
    tint: '#120f1c',
    visual: 'orian',
  },
  {
    slug: 'catercore',
    num: '03',
    title: 'CaterCore',
    kicker: 'Flashback Labs · client platform',
    year: '2026',
    role: 'Designed & built the UI',
    tagline: 'The operations dashboard behind a large catering company.',
    body: 'A multi-module platform for contracts, clients, billing and event requirements, with an AI intake agent that takes event orders by chat. I designed and built the complete interface.',
    points: [
      'Separate portals for admins, staff, customers and support, each with its own screens and access',
      'Dense, sortable data views for contracts, billing and client details',
      'Next.js 16 + NestJS + Postgres, LangGraph intake agent, Stripe, AWS',
    ],
    stack: ['Next.js', 'React 19', 'Tailwind', 'NestJS', 'Prisma', 'PostgreSQL', 'AWS'],
    tint: '#16120c',
    visual: 'catering',
  },
  {
    slug: 'stevie',
    num: '04',
    title: 'Stevie Intel',
    kicker: 'Flashback Labs · The Stevie Awards',
    year: '2026',
    role: 'Frontend + backend',
    tagline: 'Ask the Stevie Awards’ history a question in plain English.',
    body: '“Search Past Winners” is an AI assistant over decades of award-winner data. It sits on a pipeline that collects 82,654 historical records and grounds every answer in them.',
    points: [
      'Natural-language search over winners, categories and organisations',
      'Two-phase collector: Playwright harvest + plain HTTP fetch, live control dashboard',
      'Retrieval-grounded answers that know the award rules, not just the data',
    ],
    stack: ['Python', 'FastAPI', 'Playwright', 'SQLite', 'RAG', 'WebSockets'],
    tint: '#0c1114',
    visual: 'stevie',
  },
  {
    slug: 'tracker',
    num: '05',
    title: 'Link Tracker',
    kicker: 'Flashback Labs',
    year: '2026',
    role: 'Built end to end',
    tagline: 'One short link that knows whether a click came from WhatsApp, Instagram or Google.',
    body: 'Paste a URL, share one link everywhere. Each click is attributed to its platform from headers, in-app browser signatures and a tiny client probe, then redirected with zero added latency.',
    points: [
      'Confidence levels from exact to none, never a made-up source',
      'Preview-crawler matching to catch WhatsApp and Telegram desktop',
      'Click is stored before the redirect, so analytics never costs a visit',
    ],
    stack: ['Node.js', 'JavaScript', 'SQL', 'Vercel'],
    link: { label: 'Live site', href: 'https://tracking-smoky-rho.vercel.app' },
    tint: '#0f1210',
    visual: 'tracker',
  },
  {
    slug: 'restaurant-os',
    num: '06',
    title: 'Restaurant OS',
    kicker: 'Team project · London Café, Karimnagar',
    year: '2026',
    role: 'Team build',
    tagline: 'QR ordering, a kitchen admin and a Tower Bridge game for a real café.',
    body: 'Guests scan the table QR, order with UPI and track it live; staff run orders, menu, stock and table calls from a phone. One codebase serves several restaurants, each with its own design and intro.',
    points: [
      'Three.js Tower Bridge intro and a mini game that unlocks after ordering',
      'Recipe-based stock deduction with low-stock alerts',
      'Multi-tenant: London Café, Abhi’s Café, The Odd Fellow’s',
    ],
    stack: ['React', 'TypeScript', 'Three.js', 'Vite'],
    link: { label: 'View repo', href: 'https://github.com/ankithareddy08/restaurant-os' },
    tint: '#0d130f',
    visual: 'restaurant',
  },
];

// The smaller list under the case studies
export const moreWork = [
  { title: 'Project Chronos', line: 'Live 3D Earth: earthquakes and flights on a cinematic globe', tags: 'Next.js · WebGL · Hackathon', year: '2026', href: 'https://project-chronos-nine.vercel.app' },
  { title: 'Aura Sync', line: 'Gemini parses the request, a trained model ranks the meeting slots', tags: 'Gemini 2.5 · ML · React Native', year: '2026', href: 'https://github.com/ankithareddy08/aurasync' },
  { title: 'Spendify', line: 'Gamified fintech app for financial literacy, solo from UI to Android release', tags: 'React Native · Android', year: '2026' },
  { title: 'AI Flow', line: 'One-click summarise, translate and re-tone, on LLMs', tags: 'Python · LLMs', year: '2026', href: 'https://github.com/ankithareddy08/AI-FLOW' },
  { title: 'Project Aura', line: 'AI journal that colours itself to your mood and titles your entries', tags: 'Sentiment analysis · React Native', year: '2026', href: 'https://github.com/ankithareddy08/AuraApp' },
  { title: 'Pastebin Lite', line: 'Text sharing with expiry and atomic view limits, zero runtime deps', tags: 'Node 24 · SQLite', year: '2026', href: 'https://pastebin-lite-one-kohl.vercel.app' },
  { title: 'Finance API', line: 'Role-based finance records API with database-level analytics', tags: 'FastAPI · SQLAlchemy', year: '2026', href: 'https://github.com/ankithareddy08/zorvyn-finance-backend' },
  { title: 'Malware Detection', line: 'CNN + LSTM model that flags malicious Android apps', tags: 'Deep learning', year: '—' },
];

export const skillGroups = [
  { name: 'AI & GenAI', items: ['OpenAI', 'Claude', 'Gemini & Gemini Live', 'Qwen · llama.cpp', 'Multi-model orchestration', 'Prompt engineering', 'Hugging Face', 'Diffusers', 'PyTorch', 'GGUF quantization'] },
  { name: 'Full-stack', items: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Electron', 'Node.js', 'Python', 'FastAPI', 'REST · OAuth 2.0'] },
  { name: 'Design', items: ['Figma', 'Adobe XD', 'Google Stitch', 'Blender', 'Design systems', 'Data-dense dashboards'] },
  { name: 'AI coding agents', items: ['Claude Code', 'OpenAI Codex', 'Google Antigravity', 'Cursor', 'GitHub Copilot', 'Grok CLI', 'OpenCode'] },
  { name: 'Data', items: ['PostgreSQL', 'SQL', 'SQLite', 'Excel'] },
  { name: 'Cloud & shipping', items: ['Vercel', 'AWS', 'Google Cloud', 'GitHub Pages', 'Git & GitHub'] },
];

export const marquee = [
  ['LLM orchestration', 'Gemini Live', 'React', 'TypeScript', 'FastAPI', 'Diffusers'],
  ['Figma', 'Next.js', 'Electron', 'PostgreSQL', 'Claude Code', 'Hugging Face'],
];

export const certifications = [
  { title: 'Certified UI/UX Designer', by: 'Certification' },
  { title: 'Python Essentials', by: 'Cisco Networking Academy' },
  { title: 'Data Analytics Essentials', by: 'Cisco Networking Academy' },
  { title: 'Google Gemini Academy', by: 'Google' },
  { title: 'Entrepreneurship Awareness Programme', by: 'EAP' },
  { title: 'AWS Game Dev Challenge · Flipkart GRID 6.0 · Tata Crucible', by: 'Participant' },
];
