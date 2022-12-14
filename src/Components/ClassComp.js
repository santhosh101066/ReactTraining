import React, { Component } from 'react';

class ClassComp extends Component {
    render() {
        return (
            <div>
                <h3>Welcome {this.props.name}</h3>
                {this.props.person ?  <span>I am {this.props.person.name} of {this.props.person.age} years old</span>:null}
            </div>
        );
    }
}

export default ClassComp;