child = document.querySelector ('.child');

// 要素がスクロールで領域に侵入 or 離脱した時に発火する関数
function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // console.log('inview');
            // observer.unobserve(entry.target);
            entry.target.classList.add('inview');
        } else {
            // console.log('outview');
            entry.target.classList.remove('inview');
        }
    })
}

// スクロールイベントのオプション
const options = {
    // 交差対象(あまり使用されない)
    root: null,

    // 交差判定が行われる範囲 margin と同じ記述形式
    // "-300px 0px" の場合は、topから300px下がった位置、bottomから300px上がった位置に判定ラインがある
    rootMargin: "300px 0px",
    threshold: [0, 0.5, 1]
}

// 監視オブジェクト追加
io = new IntersectionObserver(callback, options);

// 監視対象追加
io.observe(child);