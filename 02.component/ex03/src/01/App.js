import React from 'react';

export default function () {
    return (
        <h1 onClick={(e)=>{
                console.log('click๐๐')
            }}
            style={{
                cursor: 'pointer'
            }}
            > 
            ex03 - Inline Handler
        </h1>
    );
}