import React, { Component, createContext, useContext } from 'react';
import { setTheme } from '../../ThemesForall';
import ErrorBoundries from '../Codesplitting/ErrorBoundries';

const Info = createContext('nun')
class ContextImp extends Component {
    render() {
        return (
            <div style={this.context}>
                <Info.Provider value='Hi is it working?'>
                    <Creation />
                </Info.Provider>

            </div>
        );
    }
}
ContextImp.contextType=setTheme
export default ContextImp;

function Creation() {
    const val = useContext(Info)
    return <div><Lastchild /> {val}</div>
}

Info.displayName = 'changedContextName'
class Lastchild extends Component {
    static contextType = Info
    render() {
        return (
            <div>
                Final {this.context}
                <ErrorBoundries>
                    <ClassContext />
                </ErrorBoundries>
                <Info.Consumer>
                    {value => 'Consumer : ' + value}
                </Info.Consumer>
            </div>
        );
    }
}
class ClassContext extends Component {
    render() {
        // console.log(this.context);
        return <div>From class {this.context}</div>
    }
}

ClassContext.contextType = Info