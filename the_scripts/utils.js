function handleCloseHeroAlert(event) {
    const heroAlert = event.target.closest('.hero-alert');
    if (heroAlert) {
        heroAlert.classList.add('closed');
    }
}
