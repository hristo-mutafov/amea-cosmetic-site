const mobileMenu = document.getElementById('mobile-menu');
const navWrapper = document.getElementById('nav_wrapper');
const nav = document.getElementById('navigation')

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active')
    nav.classList.toggle('active')
    navWrapper.classList.toggle('active')
})
