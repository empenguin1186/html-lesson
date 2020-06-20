function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // entry.target は html 要素
            ta = new TweenTextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target);
        } else {
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    io = new IntersectionObserver(callback);
    els = document.querySelectorAll('.tween-animate-title');
    els.forEach(el => io.observe(el));
});