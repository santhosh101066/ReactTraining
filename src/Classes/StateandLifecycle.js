import React, { Component } from 'react';

class StateandLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={date:new Date()}
    }
    componentDidMount(){
        this.timerId=setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div>
                Time is {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default StateandLifecycle;