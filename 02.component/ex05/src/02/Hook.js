import React,{Fragment, useRef, useState, useEffect} from 'react';

export default function Hook({color}) {
    const [boxColor, setBoxColor] = useState(null)
    const [title,setTitle] = useState(null);
    const h3Ref = useRef(null);  
    /**
     * 1. Alterbative 1 : getDerivedStateFromProps
     */
    if(boxColor !== color){
        setBoxColor(color);
    }

    /**
     * 2. After Rendering 함수 (상태 변화 -> rendering -> 함수)
     * class conponent lifecycle (componentDidMount,componentDidUpdate )
     */
    useEffect(() =>{
        console.log('After Rendering');
    })

    /**
     *  어떤 특정 상태(boxColor)에 변화에 반응하는 After Rendering 함수
     *  : 관심 분리 
     */
    useEffect(() =>{
        console.log('Update Color(DB) Using APIs...');
    }, [boxColor]);

    /**
     * Alterbative 2 : conponentDidMount & conponentWillUnmount
     */
     useEffect(() =>{
        console.log('After Mount(conponentDidMount)');
        return (function () {
            console.log('After UnMount(conponentWillUnmount)');
        })
    }, []);


    return (
        <Fragment>
            <h3 
                style={{
                width:300,
                height:50,
                backgroundColor: boxColor
                }}
                ref = { h3Ref } 
            />
            <input 
                type='text' 
                valye={title}
                onChange={e => setTitle(e.target.value)} />
        </Fragment>
    );
}