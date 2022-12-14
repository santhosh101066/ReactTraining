import React from 'react';

function FunctionComp(props) {
    return (
        <div>
            <h3>Welcome {props.name}</h3>
            {props.person ?  <span>I am {props.person.name} of {props.person.age} years old</span>:null}
        </div>
    );
}

export default FunctionComp;