## ex05 : Class Component LifeCycle
1. Mount LifeCycle 
    - constructor()
    - getDerivedStateFromProps : props로 받아온 값을 state에 동기화 한다. [react V16.5]
    - render
    - *componentDidMount : 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후  
2. Update LifeCycle
    - getDerivedStateFromProps : props로 받아온 값을 state에 동기화 한다.
    - shoudComponentUpdate :  state이 변경되었을 때 , re-rendering여부를 결정한다.
    - render 
    - getSnapshotBeforeUpdate : render 매소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react V16.3]
    - *componentDidUpdate : DOM 업데이트가 끝난 직 후, DOM 작업이 가능하다.
3. Ummount LifeCycle 
    - *componentWillUnmount : 컴포넌트를 DOM에서 제거 할 때

## Function Component LifeCycle : Hook 함수
1. Alterbative 1 : getDerivedStateFromProps
2. After Rendering 함수 (상태 변화 -> rendering -> 함수)
3. 어떤 특정 상태에 변화에 반응하는 After Rendering 함수 (어떤 특정 상태 값이 변화 -> 렌더링 -> 함수)
4. Alterbative 2 : conponentDidMount & conponentWillUnmount