// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Smooth scrolling
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'fade-in-up');
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Form submission feedback
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // Netlify handles form automatically
  const submitBtn = form.querySelector('button[type=\"submit\"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = 'Message Sent!';
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
    }, 2000);
  }, 1500);
});

// Typing animation for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}

