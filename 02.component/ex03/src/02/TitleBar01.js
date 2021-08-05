import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(){
        super(...arguments);
        // this.no -10;
        this.state =  { no :10 };
    }

    onClickHeader(e){
        // this.no++;
        // console.log('TitelBar01 click🎈🎈');
        // this.render();
        console.log('TitelBar01 click🎈🎈', this.state.no);
        this.setState({
            no: this.state.no +1
        })
    }

    render() {
        return (
            <h1 onClick={this.onClickHeader.bind(this)}    // this.onClickHeader.bind(this) 적지 않으면 undefind 
            style={{
                cursor: 'pointer'
            }}
            > 
            ex03 - Functional Event Handler(Functional Component) {
                this.state.no
            }
            </h1>
        )
    }
}