


// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Sticky nav shadow
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(15,23,42,0.1)' : '0 2px 16px rgba(15,23,42,0.06)';
});
