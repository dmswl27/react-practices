## webpack-practices: ex01
1. 프로젝트 생성
```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cil express 
```
2. 프로젝트 구조
<pre>
  /ex02
     |--- package.json
     |--- package-lock.json
     |--- node-modules
     |--- public
     |       |--- index.html
     |       |--- bundle.js
     |--- src
     |       |--- index.js
     |       |--- App.js
     |--- webpack.config.js [webpack 설정 파일]
     |--- dev-server.mjs   
<pre>

3. webpack.cinfig.js

```javascript
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}
```
4. 빌드하기
```bash
$ npx webpack 
```
webpack.config.js의 output 섹션에 지정한 ./public/bundle.js 로 번들링 됨.


4. test server 실행
```bash
$ node dev-server.mjs
```


