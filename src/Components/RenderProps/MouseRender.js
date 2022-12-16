import React, { Component } from 'react';

class RenderProps extends Component {
    constructor(props) {
        super(props);
        this.state={
            x:0,y:0
        }
        this.onMousemove=this.onMousemove.bind(this)
    }
    onMousemove(e){
        this.setState({x:e.clientX,y:e.clientY})
    }
    render() {
        return (
            <div style={{backgroundColor:'rgb(218, 218, 218)',height:'100vh',cursor:'none'}} onMouseMove={this.onMousemove}>
                <h1>Move cursor to display location of the pointer</h1>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseRender extends Component{
    render(){
        return <div><RenderProps render={mouse=><Moveobject mouse={mouse} />}/></div>
    }
}

export default MouseRender;

function Moveobject(props){
    let mouse=props.mouse
    return <div style={{position:'absolute',left:mouse.x,top:mouse.y}}>
    <span>X axis: {mouse.x}</span><br></br>
    <span>Y axix: {mouse.y}</span> 
</div>
}