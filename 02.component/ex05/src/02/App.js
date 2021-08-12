import React, { Fragment, useState } from 'react';
import Hook from './Hook';

export default function () {
    const [color, setColor] = useState('#000');  // 값을 가지고 있다.
    const [showColorBox, setShowColorBox] = useState(true);
    return (
        <Fragment>
            <h2>ex05: Hook of Functional Component</h2>
            <button onClick={() => {setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)}}>색상 변경</button>
            <br />
            <input type='checkbox' value={showColorBox} checked={showColorBox} onChange={()=>{setShowColorBox(!showColorBox)}}/> color box 보기
            {
                showColorBox ?
                    <Hook color={color} /> : null
            }
        </Fragment>
    );
}