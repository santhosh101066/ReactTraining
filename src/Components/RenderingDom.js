import { useState } from "react";


function RenderingDom() {
    let [date,setDate]=useState('Initilizing...')
    setInterval(()=>{ setDate(new Date().toLocaleString())},1000)
    return (<div id="clock" > The time is {date}</div>);
}

export default RenderingDom;