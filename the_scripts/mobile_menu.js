const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav_wrapper');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')
    nav.classList.toggle('active')
})
