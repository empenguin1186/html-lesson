const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function hello() {
    alert('hello');
    // スコープの外であってもアクセス可能
    h1.style.backgroundColor = 'green';
}

function changeColor() {
    this.style.color = 'red';
}

function resetColor() {
    this.style.color = 'black';
}

// イベントの登録。第一引数にトリガーとなるアクション, 第二引数に実行される関数を指定
btn.addEventListener('click', hello);

// イベントは複数登録可能
// イベント一覧: https://developer.mozilla.org/ja/docs/Web/API/Element
btn.addEventListener('mouseenter', changeColor);
btn.addEventListener('mouseleave', resetColor);

// イベントの削除。登録したときと同じトリガーと関数のセットを指定しなければならない
// btn.removeEventListener('click', hello);