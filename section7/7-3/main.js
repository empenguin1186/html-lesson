// イベント登録
document.addEventListener('DOMContentLoaded', () => {
    const cb = function(el, isIntersecting) {
        if(isIntersecting) {
            console.log(el);
            el.classList.add('inview');
        }
    }
    
    so = new ScrollObserver('.cover-slide', cb, {});
});