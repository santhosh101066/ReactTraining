import {useState,useEffect} from 'react'
function UsingEffects() {
    let [count, setCount] = useState()
    let [count2, setCount2] = useState()
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
export default UsingEffects