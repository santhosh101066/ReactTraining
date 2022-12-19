import React, { useDeferredValue, useId, useMemo, useState, useTransition } from 'react';

function Usingdiffervalue(props) {
    let [state,setState]=useState(0)
    let [name,setName]=useState('')
    let [isPending,startTransition]=useTransition()
    let st=useDeferredValue(state)
    console.log(useId());
    let list=useMemo(()=><li>{st}</li>,[st])
    function handle(e){
        startTransition(()=>{
            setName(e.target.value)

        })
    }
    return (
        <div>
            <h1>Using deffer value</h1>
            {st}
            {list}
            <button onClick={()=>setState(state+1)}>Click me</button><br></br>
            {isPending&&'Loading... '}
            {name}
            <br></br>
            <input type={'text'} onChange={handle}></input>
        </div>
    );
}

export default Usingdiffervalue;