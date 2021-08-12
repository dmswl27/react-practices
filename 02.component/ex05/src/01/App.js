import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function () {
    const [color, setColor] = useState('#000');  // 값을 가지고 있다.
    
    const handleClick = function (e) {
        // '#998811'
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    
    return (
        <Fragment>
            <h2>ex05: Component LifeCycle</h2>
            <button onClick={handleClick}>색상 변경</button>
            <br />
            <LifeCycle color={color} />

        </Fragment>
    );
}