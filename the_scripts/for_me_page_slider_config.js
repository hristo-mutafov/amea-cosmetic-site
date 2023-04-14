const swiper1 = new Swiper('.outer', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});

const swiper = new Swiper('.nested', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#next_nested',
        prevEl: '#prev_nested',
    },
});

delay = 10000;
next_buttons = Array.from(document.querySelectorAll('#next'));

setInterval(() => {
    for (const button of next_buttons) {
        button.click()
    }
}, delay);


