### ex04: 애플리케이션 번들링 : webpack
1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js 파일로 묶은 도구
2. 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미하는게 아니다 => application 빌드 작업도 한다.
4. 빌드 작업: 
    - linting(ESLint, 문법 체크) 작업
    - document 작업(JSDoc) 작업
    - testing(Mocha, Jest) 작업
    - 난독화/ 압축(Uglify) 작업
    - 번들링
5. 자바스트립트 뿐만 아니라 다양한 애셋(image, css, font)들도 모듈로 취급하는 추상화한다.

1. 프로젝트 생성
```bash
    $ mkdir ex04
    $ cd ex03
    $ npm init -y
    $ npm i -D express 
    $ npm i -D webpack webpack-cli express
    $ npm ./node_modules/.bin/webpack --version
    $ npx webpack --version 
```
2. 프로젝트 디렉토리
<pre>
  /ex03
    |--- package.json
    |--- package-lock.json
    |--- node-modules
    |--- public
            |--- index.html
            |--- main.js
    |---   src
            |--- index.js
            |--- App.js
    |--- dev-server.mjs 
<pre>

3. script
```json
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node dev-server.mjs",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}

```

4. application 작성
    [public/index.html]
    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <meta  charset="utf-8">
    <title>#ex04</title>
    </head>
    <body>
      <div id='root'></div>
        <script src='main.js'></script>
    </body>
    </html>
    ```
    [index.js]
    ```javascript
    import { App} from './App.js'
    document
    .getElementById('root')
    .appendChild(App());
    ```
    [App.js]
    ```javascript
    const App = function(){
      const app = document.createElement('h1');
      app.textContent = 'Hello World';
      return app;
    }
    export { App };
    ```

5. 빌드 (번들링)
```bash
$ npx webpack ./src/index.js -o ./public/bundle.js
```

```bash
$ npm run build
```

6. 테스트 서버 실행
```bash
$ npm start
```
  