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
    slidesPerView: 1,
    navigation: {
        nextEl: '#comments_next',
        prevEl: '#comments_prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        850: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        },
    },
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
