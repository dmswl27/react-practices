import React, { Component, Fragment } from 'react';

export default function() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const contentHTML = 
        "<span>" + 
             ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2) + 
            " : " +
             ('0' + minutes).slice(-2) +
            " : " +
             ('0' + seconds).slice(-2)  + 
        "</span>";
    
        return (
        // HTML 태그를 동적으로 생성하여 JSX에 추가하는 작업은 기본적으로 금지(XSS 공격 방지 기능 내장)
        <div>
            {contentHTML}
        </div>
    )
}
/**
 * createElement('div', null,'09',':','17',':','55')
 */