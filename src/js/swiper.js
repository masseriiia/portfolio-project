import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    initCatalogSlider();
})

const initCatalogSlider = () => {
    new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        breakpoints: {
            1440: {
                spaceBetween: -300,
            },
            1220: {
                spaceBetween: 0,
            },
            720: {
                spaceBetween: 40,
            },
            320: {
                spaceBetween: 30,
            }
        },
        centeredSlides: true,
        effect: "creative",
        enteredSlides: true,
        grabCursor: true,

        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
