import React, { Component, useRef } from 'react';
import './assets/scss/App.scss';

export default class App extends Component{
    onScroll(e){
        console.log('π');
    }
    render(){
        return (
            <div
                ref= {ref => this.outterRef= ref}
                
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div>
                    <ul>
                        { Array.from({length: 100}, (_, i) => i+1).map(i =>         // 1 ~100 κΉμ§ λ°°μ΄
                            <li key={i}>
                                { `μμ΄ν ${i} μλλ€.` }
                            </li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    }

    
}