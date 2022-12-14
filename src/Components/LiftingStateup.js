import React, { Component } from 'react';

class LiftingStateup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: ''
        }
    }
    // shouldComponentUpdate(){
    //     return false
    // }

    render() {
        return (
            <div>
                <input type={'number'} onChange={(e) => this.setState({ age: e.target.value })}></input>
                <MajorDetector age={this.state.age}></MajorDetector>
            </div>
        );
    }
}

export default LiftingStateup;

function MajorDetector(props) {
    if (props.age === '' ) {
        return <div>Enter the age to display</div>
    }
    else if (props.age >= 18) {
        return <div>This person is Major</div>
    }
    else {
        return <div>This person is Minor</div>
    }
}