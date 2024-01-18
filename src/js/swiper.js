import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

const initCatalogSlider = () => {
    new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: -270,
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
initCatalogSlider();