document.addEventListener('DOMContentLoaded', () => {
    const feedbackSection = document.querySelector('.feedback-section');
    feedbackSection.style.setProperty('--bg-height', '40vh');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const newHeight = 20 + scrollY / 200;

        feedbackSection.style.setProperty('--bg-height', `${newHeight}vh`);
    });
});
