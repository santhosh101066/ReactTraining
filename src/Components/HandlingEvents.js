import React, { useState } from 'react';

function HandlingEvents(props) {
let [toggle,setToggle] = useState(false)
   function popups(){
        alert('You clicked me')
    }
    function formsubmit(ev){
        alert('Form submitted')
        ev.preventDefault()
    }
    function toggleClick(){
        setToggle(!toggle)
    }
    return (
        <div>
            <button onClick={popups}>Click Me</button>
            <form onSubmit={formsubmit}>
                <input type={'submit'} value={'Submit'}></input>
            </form>
            <br></br>
            <button onClick={toggleClick} style={ toggle? {color:'green'}:{color:'red'}} >{toggle? 'ON':'OFF'}</button>
            
        </div>
    );
}

export default HandlingEvents;