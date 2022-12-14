import { useState } from 'react';
import './App.css';
import Accessibility from './Components/Accessibility/Accessibility';
import Codesplitting from './Components/Codesplitting/Codesplitting';
import MainConcepts from './Components/MainConcepts';
import Thinkreact from './Components/Thinkreact';


function App() {
  let [display,setDisplay]=useState(<Accessibility/>)
  return (
    <div className="App">
      <button onClick={()=>{setDisplay(<MainConcepts/>)}} >Main Concepts</button>
      <button onClick={()=>{setDisplay(<Thinkreact/>)}} >Think in react</button>
      <button onClick={()=>{setDisplay(<Accessibility/>)}} >Accessibility</button>
      <button onClick={()=>{setDisplay(<Codesplitting/>)}} >Code-Splitting</button>
     {display}
    </div>
  );
}

export default App;
