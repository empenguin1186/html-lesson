// 要素によっては使用できないイベントが存在する。

// html が DOM に変換された後に発火するイベント
document.addEventListener('DOMContentLoaded', function() {
    const dcl = document.querySelector('.dcl');
    dcl.style.color = 'green';
})

// DOMが生成されてスタイルの適用や画像の表示が終了した後に発火するイベント
// load イベントは window しか登録できない
window.addEventListener('load', function() {
    const load = document.querySelector('.load');
    load.style.color = 'green';
})