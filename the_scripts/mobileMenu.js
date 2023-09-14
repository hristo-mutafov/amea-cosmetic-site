/**
 * This file is responsible for burger icon click functionality.
 */

const mobileMenu = document.querySelector('.header .mobile_nav #mobile-menu');
const navWrapper = document.getElementById('nav_wrapper');
const nav = document.getElementById('navigation')

mobileMenu.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('is-active')
    nav.classList.toggle('active')
    navWrapper.classList.toggle('active')
})
