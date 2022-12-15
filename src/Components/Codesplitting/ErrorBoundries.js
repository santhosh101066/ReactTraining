import React, { Component } from 'react';

class ErrorBoundries extends Component {
    constructor(props) {
        super(props);
        this.state={
            error:null,
            errorInfo:null
        }
    }
    
    componentDidCatch(error,errorInfo){
        
        this.setState({error,errorInfo})
    }
    render() {
        return (
            <div>
                {this.state.error ? <><h2>{this.state.error.toString()}</h2><pre>{this.state.errorInfo.componentStack}</pre></>:this.props.children}
            </div>
        );
    }
}

export default ErrorBoundries;