# Pacific State
##### npm Scripts Starter

* Released : Sep. 15, 2017
* Client : Private project
* Role : Development, Art Direction



## 概要
npm Scriptsにより、静的サイト制作のための環境とビルドプロセスを構築。Node.js及びnpmがインストールされていれば1コマンドで開発環境を整えることができます。ページタイトルやメタなどの汎用的な情報はJSONで管理。開発者不在でも更新管理が可能となるようシンプルな構成としました。

### 機能
* Pug ( HTML Template Engine )
* Sass
* Webpack
* BrowserSync

### ディレクトリ構造
```
root
├ .postcssrc.json：Autoprefixerオプション設定
├ bin：
	├ pug.sh：Pugコンパイル処理
	└ server.js：BrowserSyncの起動とオプション設定
├ data：
	├ data.json：Pugコンパイル時に読み込むJSONファイル
	├ env.json：Pugコンパイル用の環境変数保持
	├ site.json：titleやmetaなど共通データの記載
	└ site.min.json：Merge専用
├ dist：生成ファイル出力／ローカルサーバールートディレクトリ
	└ images：画像ファイルの格納
├ package.json
├ README.md
├ src：開発ファイルの格納
	├ scripts：.scss
	├ styles：.js
	└ templates：.pug
└ webpack.config.js：Webpackオプション設定
```


---


## 環境構築
### 動作確認環境
以下の環境で構築
* macOS Sierra@10.12.6
* Node.js@8.6.0
* npm@5.4.2

### nodebrew / Node.jsのインストール
nodebrewをインストールの上、下記コマンドでNode.jsをインストールする。
```
$ nodebrew install-binary v8.6.0
```
なお、nodebrew導入方法がわからない、nodebrewを使用せず既にNode.jsをインストールしている場合には[node.jsのversionを管理するためにnodebrewを利用する](http://qiita.com/sinmetal/items/154e81823f386279b33c)を参照。

### 実行環境のインストール
```
$ npm i
```


---


## 使用方法
### 初回起動
HTML/CSS/JavaScriptコンパイルとファイル監視、ローカルサーバーの起動を開発時環境変数で行う。初回時などに使用。
```
$ npm start
```

### 開発
HTML/CSS/JavaScriptファイルの監視とローカルサーバー起動を開発時環境変数で行う。
```
$ npm run dev
```

### ステージング環境あるいは本番環境用ファイルの生成
HTML/CSS/JavaScriptコンパイルをステージングあるいは本番時環境変数で行う。
```
# ステージング
$ npm run stg

# 本番
$ npm run prd
```

### その他のコマンド
各タスクの実行コマンドは以下の通り。
開発／本番環境の分岐はコマンド実行時の引数で行う。
```
# pug -> HTML
$ npm run build:pug -- (DEV／STG／PRD)

# sass -> CSS
$ npm run build:sass

# EcmaScript6~ -> JavaScript
$ npm run build:webpack -- (DEV／STG／PRD)

# 画像圧縮
$ npm run imagemin

# ローカルサーバー起動
$ npm run server
```


---


## 更新履歴
* Jan. 15, 2018
	* Update imagemin
	* Add spritesmith
* Sep. 15, 2017
	* This package is Released.
