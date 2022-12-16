import React, { Component } from 'react';

class Uncontrolled extends Component {
    render() {
        return (
            <div>
                <h1>Uncontrolled</h1>
                <input type={'text'} value={'san'} ></input> 
                <h2>Controlled</h2>
                <input defaultValue={'Blob'}></input>
            </div>
        );
    }
}

export default Uncontrolled;