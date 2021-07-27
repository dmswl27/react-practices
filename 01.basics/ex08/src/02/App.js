import React, {Fragment} from 'react';
 
// 이름 없이 default로(이름을 정의하지 않음)  그럼 index.js에서 이름을 import할때 다르게 가능
export default function() {     
    /**
     * react 컴포넌트는 단일 루트 노드만 랜더링 할 수 있다.
     * props: 속성(properties) 의 줄임말. HTML 요소에 지정될 특성을 지정하거나 컴포넌트 클래스 인스턴스에 사용할 속성들을 지정한다.
     * 
     * 오류 : 
     *      <h2>App01</h2>
            <p>jsx 튜토리얼 특징1 HTML과의 차이점</p>
     */
    return (
        <div>
            { /* 주석 */}
            <h2>App01</h2>
            <p>jsx 튜토리얼 특징2: Single Root Node</p>
 
        </div>
        /* 
        <Fragment>
            <h2>App01</h2>
            <p>jsx 튜토리얼 특징2: Single Root Node</p>
        </Fragment> 
        이렇개도 사용가능 
        */
    )
}
    