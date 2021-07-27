## ex06: React(JSX 기반) 애플리케이션으로 리팩토링
1. 프로젝트 생성
```bash
    $ mkdir ex03
    $ cd ex03
    $ npm init -y
    $ npm i -D express 
    $ npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
    $ npm i react react-dom
```
2. 프로젝트 구조
<pre>
     /ex04
     |--- package.json
     |--- package-lock.json
     |--- node-modules
     |--- public
     |       |--- index.html
     |       |--- bundle.js
     |--- src
     |       |--- index.js
     |       |--- App.js
     |--- babel.config.json
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
        rules:[{
            test:/\.js$/i,
            exclude:/node_modules/,
            loader:'babel-loader'
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
4. babel.cinfig.json
```json
{
    "presets": [["@babel/env",{
        "targets":{
            "ie":"11",
            "edge":"80",
            "firefox":"73",
            "chrome":"82",
            "opera":"69",
            "safari":"13"
        }
    }], "@babel/react"]
}
```

5. 빌드하기
```bash
$ npx webpack 
```

6. test server 실행
```bash
$ npx webpack serve --progress
```


