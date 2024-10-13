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
    slidesOffsetAfter: -200,
    navigation: {
        nextEl: '#comments_next',
        prevEl: '#comments_prev',
    },
    breakpoints: {
        320: {
            slidesOffsetAfter: -220,
        },
        346: {
            slidesOffsetAfter: -240,
        },
        390: {
            slidesOffsetAfter: -260,
        },
        412: {
            slidesOffsetAfter: -270,
        },
        480: {
            slidesOffsetAfter: -320,
            slidesPerView: 1,
        },
        500: {
            slidesOffsetAfter: -350,
            slidesPerView: 1,
        },
        600: {
            slidesOffsetAfter: -420,
            slidesPerView: 1,
        },
        650: {
            slidesOffsetAfter: -460,
            slidesPerView: 1,
        },
        700: {
            slidesOffsetAfter: -500,
            slidesPerView: 1,
        },
        750: {
            slidesOffsetAfter: -560,
            slidesPerView: 1,
        },
        800: {
            slidesOffsetAfter: -600,
            slidesPerView: 1,
        },
        850: {
            slidesOffsetAfter: -250,
            slidesPerView: 2,
        },
        1000: {
            slidesOffsetAfter: -300,
            slidesPerView: 2,
        },
        1100: {
            slidesOffsetAfter: -350,
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
            slidesOffsetAfter: -400,
        },
        1300: {
            slidesPerView: 2,
            slidesOffsetAfter: -450,
        },
        1400: {
            slidesPerView: 2,
            slidesOffsetAfter: -500,
        },
        1500: {
            slidesPerView: 3,
            slidesOffsetAfter: -300,
        },
        1670: {
            slidesPerView: 3,
            slidesOffsetAfter: -350,
        },
    },
});

swiper5.on('touchEnd', function () {
    if (swiper5.isEnd) {
        window.location.href = '/opinions';
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
