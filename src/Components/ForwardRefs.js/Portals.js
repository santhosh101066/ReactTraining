import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portals extends Component {
    constructor(props) {
        super(props);
        this.state = { popup: null,count:0 }
        this.showPopup = this.showPopup.bind(this)
        this.closePopup = this.closePopup.bind(this)
        this.counter=this.counter.bind(this)

    }
    counter(){
        this.setState({count:this.state.count+1})
    }
    showPopup() {
        this.setState({ popup: ReactDOM.createPortal(<Modal close={this.closePopup} />, document.getElementById('portal')) })
    }
    closePopup() {
        this.setState({ popup: null })
    }
    
    render() {
        return (
            <div onClick={this.counter}>
                Portal page try to click{' '}
                <button onClick={this.showPopup}>Show modal popup</button>
                {this.state.popup}
                <br></br>
                counter : {this.state.count}
            </div>
        );
    }
}
export default Portals;

function Modal(props) {

    return (<div>
        <div>
            <h4>Modal</h4>
            <p>This is a modol popup rendered in another dom</p>
            <button onClick={props.close} >Close</button>
        </div>
    </div>)
}