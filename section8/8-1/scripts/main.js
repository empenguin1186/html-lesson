document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start({ delay: 2000 });
    setTimeout(() => {
        hero.stop();
    }, 5000);

    const cb = function (el, inview) {
        if (inview) {
            ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb, { once: true });

    const _inviewAnimation = function (el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    const coverSlideObserver = new ScrollObserver('.cover-slide', _inviewAnimation, {});

    const header = document.querySelector('.header');
    const _navAnimation = function (el, inview) {
        if (inview) {
            // el.classList.remove('triggered');
            header.classList.remove('triggered');
        } else {
            // el.classList.add('triggered');
            header.classList.add('triggered');
        }
    }

    const navigationObserver = new ScrollObserver('.nav-trigger', _navAnimation, { once: false });

    new MobileMenu();
})