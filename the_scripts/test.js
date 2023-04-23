// const item = document.getElementById('for_me_section')
// item.scrollTop()
// item.scrollTop = item.scrollHeight

// get buttons
const homeBtn = document.getElementById("home_btn");
const forMeBtn = document.getElementById("for_me_btn");
const proceduresBtn = document.getElementById("procedures_btn");
const coursesBtn = document.getElementById("courses_btn");
const contactsBtn = document.getElementById("constacts_btn");

// Get all sections
const heroSection = document.getElementById("hero_section");
const forMeSection = document.getElementById("for_me_section");
const proseduresSection = document.getElementById("procedures");
const trainingsSection = document.getElementById('trainings');

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0)
});

forMeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, heroSection.offsetHeight)
});

proceduresBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // proseduresSection.scrollIntoView(false)
    window.scrollTo(0, heroSection.offsetHeight + forMeSection.offsetHeight)
})

coursesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    trainingsSection.scrollIntoView()
})
