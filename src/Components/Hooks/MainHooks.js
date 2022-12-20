import React, { createRef, useEffect, useState } from 'react';
import Reducer from './Reducer';
import UsingCallback from './UsingCallback';
import Usingdiffervalue from './Usingdiffervalue';

function MainHooks(props) {
    let on = createRef()
    let off = createRef()
    let status = CustomHooks(on, off)
    //let status=null
    return (
        <div>
            <h1>State Hook</h1>
            <UsingState />
            <h1>Effect Hook</h1>
            <UsingEffects />
            <h2>Custom hooks</h2>
            <button ref={on}>ON</button> <button ref={off}>OFF</button>
            {' '}{status === null ? 'Loading...' : status ? 'ON' : 'OFF'}
            <Reducer/>
            <UsingCallback/>
            <Usingdiffervalue/>
        </div>
    );
}

export default MainHooks;

function UsingState() {
    let [count, setCount] = useState(0)

    return <div><br /><button onClick={() => setCount((prev) => prev - 1)}>-</button><span data-testid="checkcounter">count: {count}</span><button onClick={() => setCount((prev) => prev + 1)}>+</button></div>
}
function UsingEffects() {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    useEffect(() => {
        document.title = 'The total count : ' + count + ' '
        console.log('Use effect');
        return () => {
            document.title = 'React App'
        }
    }, [count])
    return <div><div> count : {count}<button onClick={() => { setCount(count + 1) }}>Click me</button></div>
        <div> count2 : {count2}<button onClick={() => { setCount2(count2 + 1) }}>Click me</button></div></div>
}

function CustomHooks(onState, offState) {
    let [status, setStatus] = useState(null)
    useEffect(() => {
        let [on, off] = [onState.current, offState.current]
        on.addEventListener('click', () => { setStatus(true) })
        off.addEventListener('click', () => { setStatus(false) })

        return () => {
            on.removeEventListener('click', () => { setStatus(true) })
            off.removeEventListener('click', () => { setStatus(false) })
        }
    })

    return status
}