/**
 * アニメーションを付与するクラス
 * 1. 特定の要素のテキストを1文字ずつ分割してそれぞれに <span class="char">要素を付与。
 * 2. 特定の要素に '.inview' クラスを付与。
 * 
 * @class TextAnimation
 */
class TextAnimation {
    /**
     * @constructor
     * @param {HTMLElement|string} アニメーションを付与する要素
     */
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split('');
        this.DOM.el.innerHTML = this._getText();
    }
    
    /**
     * テキストの各文字に対して char クラスが付与された<span>タグを生成する。
     * 
     * @method _getText
     * @returns <span class="char">hoge</span>...
     */
    _getText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return acc += `<span class="char">${curr}</span>`;
        }, "");
    }

    /**
     * 指定した要素にアニメーションを付与する。文字数関係なく delay を動的に設定できる。
     * 
     * @method animate
     */
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

/**
 * TextAnimation クラスと異なり、テキストの文字数に関わらずアニメーションを付与するクラス
 * 
 * @class TweenTextAnimation
 */
class TweenTextAnimation extends TextAnimation {

    /**
     * @constructor
     * @param {HTMLElement|string} アニメーションを付与する要素
     */
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
        // console.log(this.DOM.chars)
    }

    /**
     * 指定した要素にアニメーションを付与する。文字数関係なく delay を動的に設定できる。
     * 
     * @method animate
     */
    animate() {
        this.DOM.el.classList.toggle('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: {y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            })
        });
    }
}