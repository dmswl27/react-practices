import React, {useRef} from 'react';  // 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용
import Guestbook from './Guestbook'; 
import styles from '../public/assets/scss/App.scss';

// 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용
export default function App() {      
    const outterRef = useRef(null);
    const innerRef = useRef(null); 
    return (       
        <div 
            ref={ outterRef }  // Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공
            className={styles.App}
            onScroll={ e => {
                if(outterRef.current.scrollTop + outterRef.current.clientHeight + 20 > innerRef.current.clientHeight){
                    console.log("Fetch!!!");
                }
            } }
        >       
            <div ref={innerRef}>
                <Guestbook title='방명록' />
            </div>
        </div>
    );
}
 
/**
 * props는 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단
 * 자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링
 *  */ 