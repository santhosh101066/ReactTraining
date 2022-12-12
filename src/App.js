import './App.css';
import ClassComp from './Classes/ClassComp';
import FunctionComp from './Classes/FunctionComp';
import Helloworld from './Classes/Helloworld';
import JSXtraining from './Classes/JSXtraining';
import RenderingDom from './Classes/RenderingDom';
import StateandLifecycle from './Classes/StateandLifecycle';

function App() {
  return (
    <div className="App">
      <Helloworld/>
      <hr></hr>
      <h1>JSX</h1>
      <JSXtraining/>
      <hr></hr>
      <h1>Rendering Dom</h1>
      <RenderingDom/>
      <hr></hr>
      <h1>Function and class components</h1>
      <h2>Function</h2>
      <FunctionComp name="santhosh" person={{name:'santhosh',age:22}}/>
      <h2>Class</h2>
      <ClassComp name="Sanjai" person={{name:'sanjai',age:22}}/>
      <hr></hr>
      <h1>State and lifecycle</h1>
      <StateandLifecycle/>
    </div>
  );
}

export default App;
