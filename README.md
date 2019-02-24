# React-Express  
[![npm version](https://badge.fury.io/js/%40react-express%2Fcore.svg)](https://badge.fury.io/js/%40react-express%2Fcore) [![Build Status](https://travis-ci.org/tamalion-org/react-express.svg?branch=master)](https://travis-ci.org/tamalion-org/react-express) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/05848b1fed8a4b6b825346151a9a7899)](https://www.codacy.com/app/tamalion-org/react-express?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tamalion-org/react-express&amp;utm_campaign=Badge_Grade) [![dependencies Status](https://david-dm.org/tamalion-org/react-express/status.svg)](https://david-dm.org/tamalion-org/react-express)  

<br>
<br>

## Usage
### Install
```
npm i -g @react-express/core
npm install -g @react-express/core
```
Either installation is possible.

### Create
```
cd ***

react-express
```
Please move to the project beforehand.  
Configure automatically by entering react-express command.

### Examples Of Command
```
***/
   ├─ node_modules/
   ├─ public/
   ├─ routes/
   ├─ vendors/
   ├─ views/
   ├ .babelrc
   ├ routes.js
   ├ server.js
   └ webpack.config.js

```

### Run
```
npm start
```
By inputting the npm start command,  
automatic compilation is executed via webpack.  
You can check from localhost: 3000 in any browser.

### Debug
```
npm run debug
```
By inputting the npm run debug command,  
automatic compilation and debug is executed via webpack.  
You can check from localhost: 3000 in any browser.

### Option
```
react-express -r ***
react-express --route ***
```
This is an option to easily generate "Route".  
If you type after -r or --route, server side rendering React are generated as names.
```
react-express -b ***
react-express --backend ***
```
This is an option to easily generate "Backend Express".  
If you type after -b or --backend, Backend Express are generated as names.

<br>
<br>
<br>

## 利用方法
### インストール
```
npm i -g @react-express/core
npm install -g @react-express/core
```
どちらでもインストール可能です。

### 作成
```
cd ***

react-express
```
あらかじめプロジェクトに移動してください。  
react-expressコマンドを入力して自動的に作成します。

### コマンドを実行結果
```
***/
   ├─ node_modules/
   ├─ public/
   ├─ routes/
   ├─ vendors/
   ├─ views/
   ├ .babelrc
   ├ routes.js
   ├ server.js
   └ webpack.config.js

```

### 起動
```
npm start
```
npm startコマンドを入力すると、  
webpackを介して自動コンパイルとサーバーの起動を行います。  
任意のブラウザで localhost:3000 から確認できます。

### デバッグ
```
npm run debug
```
npm run debugコマンドを入力すると、  
webpackを介して自動コンパイル・デバッグとサーバーの起動を行います。  
任意のブラウザで localhost:3000 から確認できます。

### オプション
```
react-express -r ***
react-express --route ***
```
これは簡易的に "ルート"を生成するオプションです。  
-r か --route の後に入力されたものが、名前としてサーバーサイドレンダリングされた React が生成されます。
```
react-express -b ***
react-express --backend ***
```
これは簡易的に "バックエンド（Expresss）"を生成するオプションです。  
-b か --backend の後に入力されたものが、名前としてバックエンドの Express が生成されます。

<br>
<br>

##  Support
  
React + Express + Redux

## License
MIT

