/**
 * This file is responsible for burger icon click functionality.
 */

const mobileMenu = document.querySelector('.header .mobile_nav #mobile-menu');
const navWrapper = document.getElementById('nav_wrapper');
const nav = document.getElementById('navigation');
const logoBtn = document.getElementById('logo_btn');

mobileMenu.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('is-active');
    nav.classList.toggle('active');
    navWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

logoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
});

/**
 * This is responsible for keeping the language state correct
 * p.s. I know this is wrong. Its expected the infrastructure to be changed
 */

const languageLinks = [
    ...document.querySelectorAll(
        '.header .wrapper .ul_wrapper .language-switcher a',
    ),
    ...document.querySelectorAll(
        '.footer .additional_wrapper .language-switcher .language-options a',
    ),
];

// Find BG and EN buttons for both header and footer
const buttons = {
    bg: languageLinks.find((link) => link.textContent.trim() === 'BG'),
    en: languageLinks.find((link) => link.textContent.trim() === 'EN'),
};

// Functions to switch language
function switchToEn() {
    localStorage.setItem('en', 'true');
}

function switchToBg() {
    localStorage.removeItem('en');
}

// Add event listeners for both BG and EN buttons
Object.values(buttons).forEach((button) => {
    button?.addEventListener('click', () => {
        if (button.textContent.trim() === 'EN') {
            switchToEn();
        } else {
            switchToBg();
        }
    });
});
