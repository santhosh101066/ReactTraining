import {useState,useEffect} from 'react'
import api from '../../api'

function UsingEffects() {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)
    let [loaded,setLoad]=useState(false)
    useEffect( () => {
        document.title = 'The total count : ' + count + ' '
        console.log('Use effect' ,loaded);
        (async()=>loaded|| console.log(await api.get('posts')))()
        setLoad(true)
        return () => {
            document.title = 'React App'
        }
    }, [count,loaded])
    
    return <div><div> count : {count}<button onClick={() => { setCount(count + 1) }}>Click me</button></div>
        <div> count2 : {count2}<button onClick={() => { setCount2(count2 + 1) }}>Click me</button></div></div>
}
export default UsingEffects

