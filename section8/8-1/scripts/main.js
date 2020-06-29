document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
})

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val)
    }

    get observers() {
        return this._observers;
    }

    _init() {
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _navAnimation(el, inview) {
        // console.log(this);
        if (inview) {
            // el.classList.remove('triggered');
            this.header.classList.remove('triggered');
        } else {
            // el.classList.add('triggered');
            this.header.classList.add('triggered');
        }
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation, {});
        this.observers = new ScrollObserver('.tween-animate-title', this._tweenTextAnimation, { once: true });
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.appear', this._inviewAnimation, {});
        // rootMargin: "-300px 0px" は画面の一番下から300px上部に境界線を引き、監視対象の要素がその境界線を超えた場合にアニメーションが行われるという挙動をとる
        this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" });
    }

    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _tweenTextAnimation(el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if (inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _sideAnimation(el, inview) {
        if (inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }
}