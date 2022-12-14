import React, { Component } from 'react';

class ChildComponent extends Component {
    componentDidMount(){
        console.log('Child component have been mounted');
    }
    componentWillUnmount(){
        console.log('Child component have been unmounted sucessfully');
    }
    render() {
        return (
            <div>
                <h3>This is the child component</h3>
            </div>
        );
    }
}

export default ChildComponent;