import React, { Component } from 'react';
import $ from 'jquery'
function OtherLib(props) {
    return (
        <div>
            <Choose>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
            </Choose>
        </div>
    );
}

export default OtherLib;

class Choose extends Component{
    componentDidMount(){
        this.$rel= $(this.rel)
        console.log();
        this.handleChange=this.handleChange.bind(this)
        this.$rel.on('change',this.handleChange)
    }
    componentWillUnmount(){
        this.$rel.off('change',this.handleChange)
        this.$rel=null
    }
    handleChange(e){
        console.log(e.target.value);
    }
    render(){
        return <div><select ref={rel=>this.rel=rel}>{this.props.children} </select></div>
    }
}
// class $ {
//     #reference;
//     constructor(rel) {
//         this.rel = rel;
//     }
//     choose(info){
//        info==='destroy'? this.#reference=null :  this.#reference=this.rel
//     }
//     on(name,callBack){
//         this.#reference.addEventListener(name,callBack)
//     }
//     off(name,callBack){
//         this.#reference.removeEventListener(name,callBack)
        
//     }
// }