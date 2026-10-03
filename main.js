// Transisi awal web
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach((el) => el.classList.add('reveal-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', initScrollReveal);

// Menu sidebar mobile
const menuBtn = document.querySelector(".menu-btn");
const topbar = document.querySelector(".topbar");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  topbar.classList.toggle("active");
  overlay.classList.toggle("active");
  menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Tutup sidebar saat link diklik
topbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});