# Pacific State
##### npm Scripts Starter

* Updated : Aug. 22, 2018
* Client : Private project
* Role : Development

![Pacific State](https://raw.githubusercontent.com/tomoyaotsuka/pacific-state/master/dist/images/common/mainvisual-2.jpg)

## 概要
npm Scriptsにより、静的サイト制作のための環境とビルドプロセスを構築。Node.js及びnpmがインストールされていれば1コマンドで開発環境を整えることができます。ページタイトルやメタなどの汎用的な情報はJSONで管理。開発者不在でも更新管理が可能となるようシンプルな構成としました。

### 機能
* Pug
* Sass
* Webpack
* Sprite Image
* Image Minify (png/jpg/gif/svg)
* BrowserSync

### ディレクトリ構造
```
root
├ bash：npm Scripts の実行コマンド設定
├ conf：
	├ bs.config.js：BrowserSyncの起動とオプション設定
	├ postcss.config.json：Autoprefixerオプション設定
	├ spritesmith.config.js：Spritesmithオプション設定
	└ webpack.config.js：Webpackオプション設定
├ data：
	├ data.json：Pugコンパイル時に読み込むJSONファイル
	├ env.json：Pugコンパイル用の環境変数保持
	├ site.json：titleやmetaなど共通データの記載
├ dist：生成ファイル出力／ローカルサーバールートディレクトリ
├ src：開発ファイルの格納
	├ assets：font etc...
	├ images：.png/.jpg/.gif/.svg
	├ scripts：.js
	├ styles：.scss
	└ templates：.pug
├ package.json
└ README.md
```


---


## 使用方法
### 実行環境のインストール
```
$ npm i
```

### 生成
HTML/CSS/JavaScriptコンパイルをプロダクションモードで行う
```
$ npm run build
```

### 開発
```
# HTML/CSS/JavaScriptコンパイルとファイル監視、ローカルサーバーの起動をプロダクションモードで行う
$ npm start

# HTML/CSS/JavaScriptコンパイルとファイル監視、ローカルサーバーの起動を開発モードで行う
$ npm run dev
```

### その他のコマンド
各タスクの実行コマンドは以下の通り。
```
# assetsディレクトリ内をdist配下へコピー
$ npm run copy

# JavaScriptのESLintチェックを行う
$ npm run format

# 画像圧縮
$ npm run minify

# ローカルサーバー起動
$ npm run server
```
