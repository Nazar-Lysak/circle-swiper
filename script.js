document.addEventListener('DOMContentLoaded', function() {
    const slideItem = document.querySelectorAll('.swiper-slide');
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3.5,   
        centeredSlides: true,
        spaceBetween: 20,
        slideToClickedSlide: true,
        allowTouchMove: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheel: {
            invert: true,
        },
        on: {
            init: function() {
                updateAdjacentSlideClasses(this);
            },
            slideChange: function () {
                updateAdjacentSlideClasses(this);
            },
        },
    });

    function updateAdjacentSlideClasses(swiperInstance) {
        var slides = swiperInstance.slides;

        console.log(swiperInstance)
    
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('custom-class-before-prev', 'custom-class-after-next');
    
            if (i === swiperInstance.activeIndex - 2) {
                slides[i].classList.add('custom-class-before-prev');
            } else if (i === swiperInstance.activeIndex + 2) {
                slides[i].classList.add('custom-class-after-next');
            }
        }
    }

    var swiperContainer = document.querySelector('.swiper-container');
    var hammer = new Hammer(swiperContainer);

    hammer.on('panstart', function(event) {
        slideItem.forEach(el => el.classList.remove('checked'));
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
    
    slideItem.forEach(slide => {
        slideItem.forEach(el => el.classList.remove('checked'));
        slide.addEventListener('click', () => {
            if(slide.classList.contains('checked')) {
                slide.classList.remove('checked')
            } else {
                slide.classList.add('checked')
            }            
        })
    })
});

