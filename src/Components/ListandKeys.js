import React, { Component } from 'react';

class ListandKeys extends Component {
    constructor(props) {
        super(props);
        const fruits=['Apple', 'Orange', 'Banana', 'Grape']
        this.fruits=['Apple', 'Orange', 'Banana', 'Grape']
        this.list=fruits.map((fruit,index)=><li key={index}>{fruit}</li>)
        this.products=[{id:1,name:'Realme', price:10000},{id:2,name:'Redmi', price:15000},{id:3,name:'Samsung', price:20000}]
        this.state={
            product:null
        }
        this.viewProduct=this.viewProduct.bind(this)
    }
    viewProduct(){
        if(this.state.product===null){
            this.setState({product:this.products.map(product=><div key={product.id}>{product.id}) {product.name} of price {product.price}. </div>)})
        }
        else{
            this.setState({product:null})
        }
        
    }
    
    render() {
        return (
            <div>
                <h3>These are the fruit list</h3>
                <ul>{this.list}</ul>
                <h3>To view the Product </h3>
                <button onClick={this.viewProduct}>{this.state.product?'Hide product':'Show product'}</button>
                {this.state.product}
            </div>
        );
    }
}

export default ListandKeys;