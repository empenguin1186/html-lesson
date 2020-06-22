document.addEventListener('DOMContentLoaded', function() {
    const hero = new HeroSlider('.swiper-container');
    hero.start({delay: 2000});
    setTimeout(() => {
        hero.stop();
    }, 5000);
})