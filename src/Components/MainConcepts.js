import React, { Component } from 'react';
import ClassComp from './ClassComp';
import Compositionvsinheritance from './Compositionvsinheritance';
import ConditionalRendering from './ConditionalRendering';
import ErrorFinder from './ErrorFinder';
import Forms from './Forms';
import FunctionComp from './FunctionComp';
import HandlingEvents from './HandlingEvents';
import Helloworld from './Helloworld';
import JSXtraining from './JSXtraining';
import LiftingStateup from './LiftingStateup';
import ListandKeys from './ListandKeys';
import RenderingDom from './RenderingDom';
import StateandLifecycle from './StateandLifecycle';
import ChildComponent from './Subcomponents/ChildComponent';
class MainConcepts extends Component {
    render() {
        return (
            <div>
                <Helloworld />
                <hr></hr>
                <h1>JSX</h1>
                <JSXtraining />
                <hr></hr>
                <h1>Rendering Dom</h1>
                <RenderingDom />
                <hr></hr>
                <h1>Function and class components</h1>
                <h2>Function</h2>
                <FunctionComp name="santhosh" person={{ name: 'santhosh', age: 22 }} />
                <h2>Class</h2>
                <ClassComp name="Sanjai" person={{ name: 'sanjai', age: 22 }} />
                <hr></hr>
                <h1>State and lifecycle</h1>
                <ErrorFinder>
                    <StateandLifecycle />
                </ErrorFinder>
                <hr></hr>
                <h1>Handling Event</h1>
                <HandlingEvents />
                <hr></hr>
                <h1>ConditionalRendering</h1>
                <ConditionalRendering />
                <br></br>
                <hr></hr>
                <h1>List and Keys</h1>
                <ListandKeys />
                <br></br>
                <hr></hr>
                <h1>Forms</h1>
                <Forms />
                <br></br>
                <hr />
                <h1>Lifting State up</h1>
                <LiftingStateup />
                <br></br>
                <hr></hr>
                <h1>Composition vs Inheritance</h1>
                <Compositionvsinheritance objectPassing={<LiftingStateup />}><ChildComponent key={20} /></Compositionvsinheritance>
            </div>
        );
    }
}

export default MainConcepts;