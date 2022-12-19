import React, {  useCallback, useEffect, useMemo, useState } from "react";

function UsingCallback(props) {
    let [state,setState]=useState(false)
   
    useEffect(()=>{
        console.log('parent rendered');
    })
    const handleClick=useCallback((e)=>{
        console.log(e.currentTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    // const handleClick=(e)=>{
    //     console.log(e.currentTarget);
    
    // }
    const Childs=useMemo(()=><Child  handleClick={handleClick}/>,[handleClick])
    return <div>
        <h2>Callback</h2>
        <button onClick={()=>setState(!state)}>Change state</button>
     
        {Childs}
     
        
    </div>
}

export default UsingCallback;

function Child({handleClick}){
    
    useEffect(()=>{
        
        console.log('Child rendered');
    })
    let list=[0,1,2,3]
   return <div>{list.map(val=><button key={val} onClick={handleClick}>{val}</button>)}</div>
}