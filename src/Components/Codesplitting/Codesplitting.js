import React, { Component, Fragment, Suspense, useState } from 'react';
import { setTheme } from '../../ThemesForall';
import ErrorBoundries from './ErrorBoundries';

const Contact = React.lazy(() => import('../Subcomponents/Contact'))

const Message = React.lazy(() => import('../Subcomponents/Message'))
class Codesplitting extends Component {
    constructor(props) {
        super(props);
        this.keycheck = ['santhosh', 'sanjai', 'sathish']
        this.state = {
            input: this.keycheck.map((val, i) => <div key={i} onClick={this.log}>{val}</div>)
        }
        this.filterList = this.filterList.bind(this)
    }

    log(e) {
        console.log(e.target.innerText);
    }

    filterList(e) {
        let filter = this.keycheck.filter(val => val.startsWith(e.target.value) && val)
        this.setState({ input: filter.map((val, i) => <div key={i} onClick={this.log}>{val}</div>) })
    }
    componentDidMount() {
        import('./math').then(math => console.log(math.default(2, 56)))
    }
    render() {

        const Forms = React.lazy(() => import('../Forms'))

        return (
            <div style={this.context}>
                Import output in log
                <h2>Lazy Loading</h2>
                <Suspense fallback={<div>Loading..</div>}>
                    <Forms />
                </Suspense>
                <br></br>
                <input type={'text'} onChange={this.filterList}></input>
                {this.state.input}
                <br></br>
                <br></br>
                <Tabs />
            </div>
        );
    }
}
Codesplitting.contextType=setTheme
export default Codesplitting;


function Tabs() {
    let [display, setDisplay] = useState()
    return (
        <Fragment>
            <button onClick={() => setDisplay(<Contact />)}>Contact</button><button onClick={() => setDisplay(<Message />)}>message</button>
            <ErrorBoundries>
                <Suspense fallback={<div>Loading .. </div>}>
                    {display}
                </Suspense>
            </ErrorBoundries>
        </Fragment>
    )
}
