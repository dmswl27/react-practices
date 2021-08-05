import React, {Component, useState} from 'react';

export default class LifeCycle extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            color : null
        }

        console.log('[MOUNT01]');
    }
    /**
     * props로 받아온 값을 state에 동기화 한다.[react V16.3] 
     */
    static getDerivedStateFromProps(nextProps, preState){
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProps(${nextProps},${preState})`);
        return nextProps.color !== preState.color ? {color : nextProps.color} : null
    }

    render(){
        console.log(`[MOUNT03][UPDATE03]: render() `);
        return (
            <h3 style={{
                width:300,
                height:50,
                backgroundColor: this.state.color
            }}></h3>
        )
    }
}