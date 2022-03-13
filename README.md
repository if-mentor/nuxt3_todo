# Todo リスト作成チーム開発（第 1 期 Nuxt3_team）

## 開発メンバー

- 管理： ジュンペイ （Junkichi89）
- リーダー:（Issue 管理など）
- レビュワー: メンバー全員
- サポート:

- 参加メンバー
- 

## 使用技術

- Nuxt.js(V3) (https://v3.nuxtjs.org/)

## 推奨VScode拡張機能
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph&ssr=false#qna) コミットの一覧→詳細を閲覧できる 
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) ファイルの履歴などを確認できる
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

※ おすすめしたいものがあれば適宜追加する

## バージョン情報

voltaで管理、volta以外をお使いの方は自身で以下のバージョンにあわせてください。
https://volta.sh/

```
"node": "14.18.3",
"yarn": "1.22.17"
```

## プロジェクトの概要

Todo リストの作成を通じて、Nuxt.js(V3) の基礎、git,Github の使い方に慣れ、チーム開発を体験する。
チームメンバー同士でのコードレビュー、毎週MTGでのissueやデザインについての議論など個人開発では行えない内容をカバーしていきます。

## 環境構築手順

1. `git clone https://github.com/if-mentor/nuxt3_todo.git`
2. リポジトリのディレクトリへ移動
3. `yarn`  // packageのinstall
4. `yarn dev `
   上記を実行し、`http://localhost:3000/`
   以下の画像の画面が表示できるか確認をお願いします。

![image](https://user-images.githubusercontent.com/65665381/158047936-6f2569f5-506f-41fb-b3fb-44f40c544f32.png)


## 開発Tips

1. プルリクエスト前の作業

プルリクエストを上げる前に必ず、自分が作業を行なっているブランチで`git pull origin main`を行うこと
もし、コンフリクトが発生したら、ローカル上で解決する、解決の仕方がわからない場合は、メンバーに相談すること

2. `git pull origin main`を行なった後の作業

remoteに変更があった場合は、`git pull origin main`のコマンドを実行し、remoteの変更を取り込む
packageに更新がないか、確認するため、`yarn`コマンドを実行する
`success Already up-to-date.`と表示されればOK。

### 自主的な貢献を歓迎

チームにとっていいことを考え行動してくれる方を尊重します。
やりたいことや試してみたいことなどを自主的に提案していただき、どんどんチーム開発を盛り上げていきましょう！
基本的にはチームとして行いたいものを自由にやってもらうスタンスで進めていきます。

### git/gitHub

毎週MTGの際にメンバーの中で翌週のプルリクに対して、レビュワーを2人以上決めて、順番に回していく。

#### ブランチ命名規則

issue 番号を必ず含める

**＜具体例＞**
issue#３ Todo の作成画面の実装の場合

`git checkout -b #3-Todo-Page-Layout`

#### コミットメッセージ

#issue 番号 + 日本語で端的に

例）
`git commit -m '#3 Todo作成画面の要素を追加し、レイアウト調整' `
