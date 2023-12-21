/**
 * This file is responsible for the slider configurations.
 *
 */

const swiper1 = new Swiper('.for_me_swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '#for_me_swiper_next',
        prevEl: '#for_me_swiper_prev',
    },
});

const swiper2 = new Swiper('.procedures_swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '#procedures_swiper_next',
        prevEl: '#procedures_swiper_prev',
    },
});

const swiper = new Swiper('.nested', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '#next_nested',
        prevEl: '#prev_nested',
    },
});

const swiper5 = new Swiper('.opinions_swiper', {
    slidesPerView: 3,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '#comments_next',
        prevEl: '#comments_prev',
    }
});

const swiper6 = new Swiper('.brochure_swiper', {
    slidesPerView: 1,
    freeMode: false,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#brochure_next',
        prevEl: '#brochure_prev',
    },
});

// delay = 10000;
// next_buttons = Array.from(document.querySelectorAll('.swiper-button-next'));

// setInterval(() => {
//     for (const button of next_buttons) {
//         button.click()
//     }
// }, delay);
