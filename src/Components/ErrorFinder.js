import React, { Component } from 'react';

class ErrorFinder extends Component {
    constructor(props) {
        super(props);
        this.state={
            error:null,
            errorinfo:null
        }
    }
    
    componentDidCatch(error,errorinfo){
        return this.setState({error,errorinfo})
    }
    render() {
      if(this.state.error){
        return <div>
            <h3>Something Went wrong</h3>
            <h4>{this.state.error.toString()}</h4>
            <pre style={{textAlign:'start'}}>{this.state.errorinfo.componentStack}</pre>
        </div>
      }
      else{
        return (
            <div>
                {this.props.children}
            </div>
        );
      }
        
    }
}

export default ErrorFinder;