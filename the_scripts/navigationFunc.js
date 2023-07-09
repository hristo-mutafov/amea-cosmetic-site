// get buttons
const homeBtn = document.getElementById('home_btn');
const logoBtn = document.getElementById('logo_btn');
const forMeBtn = document.getElementById('for_me_btn');
const proceduresBtn = document.getElementById('procedures_btn');
const coursesBtn = document.getElementById('courses_btn');
const pricesBtn = document.getElementById('prices_btn')
const contactsBtn = document.getElementById('constacts_btn');

const closeMobile = document.getElementById('mobile-menu');

// Get all sections
const heroSection = document.getElementById('hero_section');
const forMeSection = document.getElementById('for_me_section');
const proseduresSection = document.getElementById('procedures');
const trainingsSection = document.getElementById('trainings');
const pricesSection = document.getElementById('prices')

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    window.scrollTo(0, 0);
});

logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    window.scrollTo(0, 0);
});

forMeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    window.scrollTo(0, heroSection.offsetHeight);
});

proceduresBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    proseduresSection.scrollIntoView();
});

coursesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    trainingsSection.scrollIntoView();
});

pricesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    pricesSection.scrollIntoView();
});

contactsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (screen.width <= 960) {
        closeMobile.click();
    }
    window.scrollTo(0, document.body.scrollHeight);
});
