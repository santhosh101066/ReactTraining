import React, { Component } from 'react';

class StateandLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={date:new Date(),
        count:0,err:null}

        
    }
    componentDidMount(){
        this.timerId=setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    componentDidCatch(){
        this.setState({err:true})
    }
    componentDidUpdate(prevprops,prevstate){
       console.log(prevprops,prevstate);
        
    }
    render() {
        if(this.state.count===5){
            throw new Error('Caused manualy')
        }
        return (
            <div>
                Time is {this.state.date.toLocaleTimeString()}
                <h3>Click the below button to cout</h3>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}> Count : {this.state.count}</button>
            </div>
        );
    }
}

export default StateandLifecycle;