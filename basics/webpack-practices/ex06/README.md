## webpack-practices: ex06
1. 프로젝트 생성
```bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader scss-loader node-sass imafe-loader
```
2. 프로젝트 구조
<pre>
      /ex04
     |--- package.json
     |--- package-lock.json
     |--- node-modules
     |--- public
     |       |---assets
     |             |--- images
     |                     |--- logo.svg   [build 결과]
     |       |--- index.html
     |       |--- bundle.js                 [build 결과]
     |--- src
     |       |--- assets
     |       |       |--- Common.css
     |       |       |--- App.css
     |       |--- index.js
     |       |--- App.js
     |--- webpack.config.js [webpack 설정 파일]
<pre>

3. webpack.cinfig.js

```javascript
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        }]
    },    
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
}
```
4. 빌드하기
```bash
$ npx webpack 
```

5. test server 실행
```bash
$ npx webpack serve --progress
```

