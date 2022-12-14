import React, { Component } from 'react';

class LiftingStateup extends Component {
    constructor(props) {
        super(props);
        this.state={
            age:0
        }
    }
    
    render() {
        return (
            <div>
                <input type={'number'} onChange={(e)=>this.setState({age:e.target.value})}></input>
                <MajorDetector age={this.state.age}></MajorDetector>
            </div>
        );
    }
}

export default LiftingStateup;

function MajorDetector(props){
    // if(props.age==0)
    if(props.age>=18){
        return <div>This person is Major</div>
    }
    else{
        return <div>This person is Minor</div>
    }
}