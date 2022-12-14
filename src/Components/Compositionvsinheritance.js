import React, { Component } from 'react';

class Compositionvsinheritance extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false
        }
    }
    
    render() {
        return (
            <div style={{backgroundColor:'rgb(188, 252, 233)'}}>
                <button onClick={()=>{this.setState({show:!this.state.show})}}>{this.state.show? 'Hide' : 'Show'} Children</button>
                {this.state.show && this.props.children}
                {this.props.objectPassing}
                
            </div>
        );
    }
}

export default Compositionvsinheritance;
