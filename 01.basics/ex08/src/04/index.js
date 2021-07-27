import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    React.createElement(App,null), 
    document.getElementById('root'));  
// https://babeljs.io/ 접속하여 확인할 수 있음
// ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root')); 로 바뀜