import { useEffect, useState } from "react";
import api from "../../api";

function Axios(){
    let [data,Setdata]=useState(null)
    useEffect(()=>{
        if(!data){
            api.get('posts').then((res)=>{
                // console.log(res);
                Setdata(res.data.map(val=><div key={val.id}><a rel="noreferrer" target={'_blank'} href={val.web}>{val.title}</a></div>))
            }).catch((err)=>console.log(err))
        }
        
    },[data])
    return <div>{data}</div>
}
export default Axios