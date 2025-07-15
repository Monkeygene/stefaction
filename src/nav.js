// src/nav.js
const navToggleBtn = document.getElementById('navToggleBtn');
const mobileNav = document.getElementById('mobileNav');

navToggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    const navInner = document.getElementById('navInner');
    const logoImg = document.getElementById('logoImg');

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      navInner.classList.replace('h-24', 'h-12');
      logoImg.classList.replace('h-14', 'h-8');
    } else {
      header.classList.remove('scrolled');
      navInner.classList.replace('h-12', 'h-24');
      logoImg.classList.replace('h-8', 'h-14');
    }
  });