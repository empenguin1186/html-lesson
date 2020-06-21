/**
 * スクロールイベント監視クラス
 * 
 * @class ScrollObserver
 */
class ScrollObserver {
    /**
     * @constructor
     * @param {string} el 監視対象のクラス名
     * @param {CallbackName} cb コールバック関数
     * @param {Object} options 監視設定
     */
    constructor(el, cb, options) {
        this.els = document.querySelectorAll(el);
        this.cb = cb;
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        // defaultOptions と 渡ってきた options をマージする。重複している要素に関しては options の値で書き換えられる
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
        // this._destroy();
    }

    /**
     * 監視対象の登録
     * 
     * @method _init
     */
    _init() {
        // els = document.querySelectorAll('.tween-animate-title');
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // entry.target は html 要素

                    // 第一引数: 対象要素
                    // 第二引数: スクロール領域と要素が交差しているか
                    this.cb(entry.target, true);
                    
                    // 監視対象から外すかどうかを once の値で変更
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            })
        }
        // callback 内で使用されている this はこの場合 window オブジェクトなので、ScrollObserverクラスにバインドする
        // window.IntersectionObserver
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => this.io.observe(el));
    }

    /**
     * 監視対象から外す
     * 
     * @method _destroy
     */
    _destroy() {
        this.io.disconnect();
    }
}