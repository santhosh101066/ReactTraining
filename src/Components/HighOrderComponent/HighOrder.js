import React, { Component, Profiler } from 'react';
import WithoutES6 from './WithoutES6';
import WithoutJSX from './WithoutJSX';

function HighOrder(props) {
    let info = [{ id: 1, name: 'Dhanush' }, { id: 2, name: 'Amar' }, { id: 3, name: 'Praveen' }, { id: 4, name: 'Dinesh' }]
    const Manage = Hoc(info, Management)
    return (
        <div>
            <Profiler id='HOC' onRender={profile}>
                <Manage />
            </Profiler>
            <h1>Without ES6</h1>
            <WithoutES6 name={'test user'} />
            <WithoutJSX name='Sample'></WithoutJSX>
        </div>
    );
}
function profile(...logs) {
    console.log(logs);
}
export default HighOrder;

function Hoc(EmpData, EmpComp) {
    return function Handling(props) {
        return <EmpComp data={EmpData} {...props} />
    }
}

class Management extends Component {
    row() {
        if (this.props.data instanceof Array) {
            return this.props.data.map(val => <tr key={val.id}><td>{val.id}</td><td>{val.name}</td></tr>)
        }
    }
    render() {
        return <div>
            <table>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.row()}
                </tbody>
            </table>
        </div>
    }
}