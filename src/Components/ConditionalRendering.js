import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false
        }
        this.clickHandle=this.clickHandle.bind(this)
    }
    clickHandle(ev) {
        console.log(ev);
        this.setState({ isLoggedin: !this.state.isLoggedin })
    }
    without(){
        console.log("Without bind");
        console.log(this.state.isLoggedin);
    }
    render() {

        return (<div>
            {this.state.isLoggedin ? <div>
                <UserPage />
                <button onClick={this.clickHandle}>Log Out</button>
            </div> : <div>
                <GuestPage />
                <button onClick={this.clickHandle}>Log IN</button>
            </div>}
            <button onClick={()=>this.without()}>Without bind</button>
        </div>)
    }
}

export default ConditionalRendering;

function UserPage() {

    return (<div>
        <h2>Welcome User</h2>
    </div>)
}
function GuestPage() {
    return <div>
        <h2>Welcome guest</h2>
    </div>
}