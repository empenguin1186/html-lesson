document.addEventListener('DOMContentLoaded', () => {
    // const el = document.querySelector('.animate-title');

    // innerHTML: テキストを取得する
    // trim(): 余計な空白を取り除く
    // const str = el.innerHTML.trim();
    // var concatStr = '';
    // for(c of str) {
    //     // HTML は基本的に空白文字は詰めるように設計されているので、意図的に空白を残しておきたい場合は &nbsp; を使用する
    //     c = c.replace(' ', '&nbsp;');

    //     // 正規表現でも指定可能
    //     // c = c.replace(/\s+/, '&nbsp;');
        
    //     concatStr += `<span class="char">${c}</span>`
    // }
    
    // el.innerHTML = concatStr;

    // reduce を使用した処理
    // const str = el.innerHTML.trim().split('');

    // .innerHTML は DOM へのアクセスになるので、使用するのは最小限に抑えたい
    // el.innerHTML = str.reduce((acc, curr) => {
    //     curr = curr.replace(/\s+/, '&nbsp;');
    //     return acc += `<span class="char">${curr}</span>`;
    // }, "");

    // インスタンス生成
    const ta1 = new TextAnimation('.animate-title');
    const ta2 = new TweenTextAnimation('.tween-animate-title');
    const btn = document.querySelector('.btn');

    // DOM生成後にアニメーションが行われる
    ta1.animate();
    ta2.animate();

    // コールバックを ta1.animate のみにすると、this の値が btn となるため、メソッドがうまく機能しない
    // animate メソッドは this が TextAnimation インスタンスの場合に機能するので、bind(ta1)が必要
    btn.addEventListener('click', ta1.animate.bind(ta1));
    btn.addEventListener('click', ta1.animate.bind(ta2));
});

class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split('');
        this.DOM.el.innerHTML = this._getText();
        // this._addClickEvent()
    }
    
    // 1文字に分割し、spanタグを生成する
    _getText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return acc += `<span class="char">${curr}</span>`;
        }, "");
    }

    // ボタンが押された場合にアニメーションが行われるようにする
    _addClickEvent() {
        window.addEventListener('load', () => {
            const btn = document.querySelector('.btn');
            btn.addEventListener('click', () => {
                this.DOM.el.classList.toggle('inview');
            });
        });
    }

    animate() {
        // this が何を指しているかはスコープを考えるとわかる
        // console.log(this);

        // window.setTimeout(function() {
        //     // この場合は window のスコープになるので、this は window となる
        //     console.log(this);
        //     this.el.classList.toggle('inview');
        // }.bind(this)); // スコープの異なりによって this が指しているものが異なるので、一致させるためには bind メソッドを使用する
        
        // この場合は animate() のスコープ、すなわち TextAnimation クラスのメソッドのスコープなので、this は TextAnimation インスタンスとなる
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation {

    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
        console.log(this.DOM.chars)
    }

    // 文字数関係なく delay を動的に設定できる。
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