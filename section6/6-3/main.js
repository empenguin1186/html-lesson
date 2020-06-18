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
    const ta2 = new TextAnimation('.animate-title2');

    // DOM生成後にアニメーションが行われる
    ta1.animate();
    ta2.animate();
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split('');
        this.el.innerHTML = this._getText();
        this._addClickEvent()
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
                this.el.classList.toggle('inview');
            });
        });
    }

    animate() {
        this.el.classList.toggle('inview');
    }
}