const createReactComponentClass = require('create-react-class')
const setIntervals={
    componentDidMount:function(){
        this.interval=setInterval(this.HandleTime,1000)
    },
    componentWillUnmount:function(){
        console.log('event cleared Without ES6');
        clearInterval(this.interval)
    }
}

export default createReactComponentClass({
    mixins:[setIntervals],
    getDefaultProps:function(){
        return {name:'Sample'}
    },getInitialState:function(){
        return {count:0,date:null}
    },
    HandleTime(){
        this.setState({date:new Date().toLocaleTimeString()})
    },
    HandleCount(){
        this.setState({count:this.state.count+1})
    },
    render: function () {
        return <div><h2>Welcome {this.props.name}</h2><button onClick={this.HandleCount}>count : {this.state.count}</button>{this.state.date}</div>
    }
})