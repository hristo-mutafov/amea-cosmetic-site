const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

delay = 5000;
next_buttons = Array.from(document.querySelectorAll('#next_img'));

setInterval(() => {
    for (const button of next_buttons) {
        button.click()
    }
}, delay);


