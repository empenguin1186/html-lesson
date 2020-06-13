# html-lesson

# section 1

## position
- position が取りうる値は `relative`, `absolute`, `fixed`, `sticky`が存在する。
- 子要素が`absolute`で親要素が`relative`である場合、子要素は親要素からの相対位置で配置される。
- `fixed` を指定された要素は、画面に固定される。
- `sticky` は `fixed`が親要素内でのみ適用されるイメージ。sticky で縦方向に固定をしたい場合は、height 属性を使用する(?)
- 親要素に`relative`を設定する機会が多い印象。

## z-index
- z-index は　要素の z軸方向の位置を決定する値。
- 同じローカルスタックコンテキスト内の要素でz軸方向の配置が行われる。ローカルスタックコンテキストが生成される条件は、親要素のpositionが`static`以外で、かつ要素の z-index の値が数値であることである。
- root のスタックコンテキストというものも存在する。