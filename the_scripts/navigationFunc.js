/**
 * This file is reponsible for page scrolling on both pages.
 */


// get buttons
const homeBtn = document.getElementById('home_btn');
const logoBtn = document.getElementById('logo_btn');
const forMeBtn = document.getElementById('for_me_btn');
const proceduresBtn = document.getElementById('procedures_btn');
const coursesBtn = document.getElementById('courses_btn');
const pricesBtn = document.getElementById('prices_btn');
const contactsBtn = document.getElementById('constacts_btn');
const closeMobile = document.getElementById('mobile-menu');

const allButtons = [
    homeBtn,
    logoBtn,
    forMeBtn,
    proceduresBtn,
    coursesBtn,
    pricesBtn,
    contactsBtn,
];

// Get all sections
const heroSection = document.getElementById('hero_section');
const forMeSection = document.getElementById('for_me_section');
const proseduresSection = document.getElementById('procedures');
const trainingsSection = document.getElementById('trainings');
const pricesSection = document.getElementById('prices');

const buttonToSectionMapper = {
    home_btn: () => window.scrollTo(0, 0),
    logo_btn: () => window.scrollTo(0, 0),
    for_me_btn: () => window.scrollTo(0, heroSection.offsetHeight),
    procedures_btn: () => proseduresSection.scrollIntoView(),
    courses_btn: () => trainingsSection.scrollIntoView(),
    prices_btn: () => pricesSection.scrollIntoView(),
    constacts_btn: () => window.scrollTo(0, document.body.scrollHeight),
};

const sectionToButtonMapper = {
    hero_section: 'home_btn',
    for_me_section: 'for_me_btn',
    procedures: 'procedures_btn',
    trainings: 'courses_btn',
    prices: 'prices_btn'
}

function scroller(e) {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }

    if (window.location.pathname === '/blog' || window.location.pathname === '/blog/') {
        window.location.href = '/#' + e.currentTarget.id
    }

    buttonToSectionMapper[e.currentTarget.id]();
}

// starting point

window.addEventListener('load', () => {
    let hash = window.location.hash;


    if (hash) {
        hash = hash.substring(1)
        buttonToSectionMapper[hash]();
        const newURL = window.location.href.replace(window.location.hash, '');
        history.replaceState('', document.title, newURL);
    }
})

allButtons.forEach((button) => {
    button.addEventListener('click', scroller);
});
