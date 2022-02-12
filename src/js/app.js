import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();

const breakpoints = {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
};

(function () {
    const breakpoint = window.matchMedia("(min-width: 1024px)");
    let news;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            // уничтожаем при '(min-width:900px)'
            if (news !== undefined) news.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) return enableSwiper(); // инициализируем при '(min-width:900px)'
    };
    const enableSwiper = function () {
        news = new Swiper("#cards-slider", {
            spaceBetween: 20,
            loop: true,
            slidesPerView: "auto",
            grabCursor: true,
            // centeredSlides: true,
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints,
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();
