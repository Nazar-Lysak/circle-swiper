document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1.5,   
        centeredSlides: true,
        spaceBetween: 20,
        // slideToClickedSlide: true,
        allowTouchMove: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheel: {
            invert: true,
        },    
    });

    var swiperContainer = document.querySelector('.swiper-container');
    var hammer = new Hammer(swiperContainer);

    hammer.on('panstart', function(event) {
        if (event.direction === Hammer.DIRECTION_LEFT) {
            swiper.slideNext();
        } else if (event.direction === Hammer.DIRECTION_RIGHT) {
            swiper.slidePrev()
        }
    });

    const next = document.querySelector('.swiper-button-next');
    const prev = document.querySelector('.swiper-button-prev');

    next.addEventListener('click', () => {
        swiper.slideNext();
    });

    prev.addEventListener('click', () => {
        swiper.slidePrev();
    })
});

