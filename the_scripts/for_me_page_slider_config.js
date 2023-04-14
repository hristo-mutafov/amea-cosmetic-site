const swiper1 = new Swiper('.for_me_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#for_me_swiper_next',
        prevEl: '#for_me_swiper_prev',
    },
});

const swiper2 = new Swiper('.procedures_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#procedures_swiper_next',
        prevEl: '#procedures_swiper_prev',
    },
});

const swiper3 = new Swiper('.trainings_wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#trainings_wrapper_next',
        prevEl: '#trainings_wrapper_prev',
    },
});

const swiper4 = new Swiper('.training_wrapper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#training_wrapper2_next',
        prevEl: '#training_wrapper2_prev',
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
next_buttons = Array.from(document.querySelectorAll('.swiper-button-next'));

setInterval(() => {
    for (const button of next_buttons) {
        button.click()
    }
}, delay);


