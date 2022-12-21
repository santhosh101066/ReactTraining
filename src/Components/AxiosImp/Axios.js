import { useEffect, useState } from "react";
import api from "../../api";
import AxiosPush from "./AxiosPush";

function Axios() {
    let [data, Setdata] = useState(null)
    let [errMsg,Seterror]=useState(null)
    useEffect(() => {
        if (!data || errMsg===1) {
            api.get('posts').then((res) => {
                // console.log(res);
                Seterror(null)
                Setdata(res.data.map(val => <div key={val.id}><a rel="noreferrer" target={'_blank'} href={val.web}>{val.title}</a></div>))
            }).catch((err) =>{ Seterror(err.message)})
        } 

    }, [data,errMsg])
    return (
    <div>
        <br></br>
        <div>{data}</div>
        {errMsg? <span>Error: {errMsg} <button onClick={()=>Seterror(1)}>Reload</button></span>: null}  
        <br></br>
        <AxiosPush/>
    </div>
    )
}
export default Axios