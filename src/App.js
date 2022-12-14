import './App.css';
import ClassComp from './Components/ClassComp';
import ConditionalRendering from './Components/ConditionalRendering';
import ErrorFinder from './Components/ErrorFinder';
import Forms from './Components/Forms';
import FunctionComp from './Components/FunctionComp';
import HandlingEvents from './Components/HandlingEvents';
import Helloworld from './Components/Helloworld';
import JSXtraining from './Components/JSXtraining';
import LiftingStateup from './Components/LiftingStateup';
import ListandKeys from './Components/ListandKeys';
import RenderingDom from './Components/RenderingDom';
import StateandLifecycle from './Components/StateandLifecycle';

function App() {
  return (
    <div className="App">
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
      <ConditionalRendering/>
      <br></br>
      <hr></hr>
      <h1>List and Keys</h1>
      <ListandKeys/>
      <br></br>
      <hr></hr>
      <h1>Forms</h1>
      <Forms/>
      <br></br>
      <hr/>
      <h1>Lifting State up</h1>
      <LiftingStateup/>
    </div>
  );
}

export default App;
