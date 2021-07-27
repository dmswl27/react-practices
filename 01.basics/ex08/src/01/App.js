import React from 'react';
 
// 이름 없이 default로(이름을 정의하지 않음)  그럼 index.js에서 이름을 import할때 다르게 가능
export default function() {     
    //HTML이 아니고(가시적으로 HTML로 보이게 만들었을 뿐) Component이다. CreateElement로 바뀜
    // 싱글~(<div>)로 감싸야함 안하면 아래 React.createElement h2, p 함수의 실행결과가 2개가 리턴이됨
 
 
    // { ... } 이거는 안됨
 
    // str = '...';
    // { str } 이렇게되는 표현식임
 
    // 그냥 asdfasdf 적으면  createElement(null, null, asdfasdf) 로 TextNode로 만들어져서 출력이됨
    // { /* */ } 이거는 먹힘 -> createElement(null, null, '')  -> 주석으로 활용
    return (
        // 여기선 주석 가능 <div> 부터 createElement니까 함수안임
        <div>
            { /* 주석 */}
            <h2>App01</h2>
            <p>jsx 튜토리얼 특징1 HTML과의 차이점</p>
            { /* 
                1. 속성은 Camel Case
            */ }
            <input type='text' maxLength='10' />
            { /* 
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input ~> <img src~ >
            */ }
            <br/>
            <hr/>
            <img width='100px' src=''/>
            { /* 
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class='box'></div>
                document.getElementById('box').className = 'box'      -> 관례적으로 class=''(되긴됨)가 아니라 className을 쓴다
            */ }
            <div id='box' className='box'>
                box 입니다
            </div>
            { /* => 
            React.createElement("div", {
                id: "box",
                className: "box"
                }, "box 입니다");
            */ }
 
        </div>
    )
    /* 
    ============>
 
    return React.createElement("div",
                        null, 
                        React.createElement("h2", null, "App01"), 
                        React.createElement("p", null, "jsx \uD29C\uD1A0\uB9AC\uC5BC \uD2B9\uC9D51 HTML\uACFC\uC758 \uCC28\uC774\uC810"));
    */
}
 
 
 
// 함수 방식
// function App () {     // 이름 없이 default로(이름을 정의하지 않음)  그럼 index.js에서 이름을 import할때 다르게 가능
//     return (
//         <div>
//             <h2>App01</h2>
//             <p>jsx 튜토리얼 특징1 HTML과의 차이점</p>
//         </div>
//     );
// };
 
// export default App;
 
 
 
 
 
/* 
function _default() {
  return React.createElement("h1", null);
}
 
이렇게 바뀜
 
*/
 
/* 
 
function _default() {
  return React.createElement("div",
                        null, 
                        React.createElement("h2", null, "App01"), 
                        React.createElement("p", null, "jsx \uD29C\uD1A0\uB9AC\uC5BC \uD2B9\uC9D51 HTML\uACFC\uC758 \uCC28\uC774\uC810"));
}
 
*/
 
