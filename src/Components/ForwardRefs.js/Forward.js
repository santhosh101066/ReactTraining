import React, { Profiler, createRef, forwardRef, useContext, useState } from 'react';
import { setTheme } from '../../ThemesForall';
import JSXindepth from './JSXindepth';
import OtherLib from './OtherLib';
import ReactDOM from 'react-dom';
import Portals from './Portals';

function Forward(props) {
    const context=useContext(setTheme)
    const ref=createRef()
    let [value,setValue]=useState('')
    function clickMe(){
        setValue(ref.current.value)
        ReactDOM.render(<div>rendered manually</div>,document.getElementById('dummy'))
    }
    return (
        <div style={context}>
            <br></br>
            <Profiler  id='Forward' onRender={profile}>
            {value}
            <FancyButton ref={ref} onClick={clickMe}>Clickme</FancyButton>
            <WithoutForward refs={ref} onClick={clickMe}></WithoutForward>
            <br></br>
            <h1>Implementing with Other Library</h1>
            <OtherLib/>
            <br></br>
            <h1>Indepth JSX</h1>
            <JSXindepth/>
            <br></br>
            <div id='dummy'></div>
            <Portals/>             
            </Profiler>
        </div>
    );
}
function profile(...logs){
    console.log(logs);
}
export default Forward;

const FancyButton=forwardRef((props,ref)=>{
return <div><textarea type={'text'} ref={ref}></textarea><br></br><button {...props}>{props.children}</button></div>}
)
FancyButton.displayName="ForwardRef"

const WithoutForward=function(props){
    return <div><input type={'text'} ref={props.refs}></input><button onClick={props.onClick}>Submit</button></div>
}