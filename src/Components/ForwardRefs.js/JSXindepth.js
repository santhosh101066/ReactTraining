import React from 'react';

function JSXindepth(props) {
    return (
        <div>
        {React.createElement('button',{style:{color:'red'}},'clickme')}
        <h2>Using Dot operator</h2>
        <NewComponent.Datepicker/>
        </div>
    );
}

export default JSXindepth;

const NewComponent={
    Datepicker:()=>{
        return <div>{new Date().toLocaleDateString()}</div>
    }
}