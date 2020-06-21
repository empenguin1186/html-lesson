// イベント登録
document.addEventListener('DOMContentLoaded', () => {
    const cb = function(el, isIntersecting) {
        if(isIntersecting) {
            ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }    

    so = new ScrollObserver('.tween-animate-title', cb, {once: true});
});