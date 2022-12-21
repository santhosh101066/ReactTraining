import React, { useEffect, useState } from 'react';
import api from '../../api';

function AxiosPush(props) {
    let [state, setState] = useState([])
  //  let [update, setUpdate] = useState(false)
    useEffect(() => {
        if (state.length===0) {
            api.get('product').then((res) => {
                if (res.data.length>0){
                    setState(res.data)
                }
            })
        }
    }, [state])

    function addProduct(event) {
        event.preventDefault()
        console.log();
        api.post('product', { name: event.target.productName.value, price: event.target.productPrice.value }).then(()=>{setState([])})
        
    }
    function clearData() {
        state.forEach(val=>api.delete('product/'+val.id).then(() => {
        }))
        setState([])
    }
    return (
        <div>
            <div>
                <form onSubmit={addProduct}>
                    <label htmlFor='name'>Product Name: </label>
                    <input id='name' name='productName' type={'text'} required></input><br /><br />
                    <label htmlFor='price'>Product Price: </label>
                    <input id='price' name='productPrice' type={'number'} required></input><br /><br />
                    <input type={'submit'}></input>
                </form>
            </div>
            <button onClick={clearData}>Clear Data</button>
            <hr></hr>
            {state.length>0 && <table style={{ display: 'block', margin: 'auto', width: 'fit-content' }}>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody >{state.map(val =><tr key={val.id}><td>{val.id}</td><td>{val.name}</td><td>{val.price}</td></tr>)}</tbody>
            </table>}
        </div>
    );
}

export default AxiosPush;