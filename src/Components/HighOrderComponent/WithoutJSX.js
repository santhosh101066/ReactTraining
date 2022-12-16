import React, { useRef } from 'react';

function WithoutJSX(props) {
    const refs=useRef(null)
    setTimeout(()=>console.log(refs),1000)
    return React.createElement('div',{ref:refs},React.createElement('h2',null,`This element is created without JSX with props "${String(props.name)}"`))
}
export default WithoutJSX;