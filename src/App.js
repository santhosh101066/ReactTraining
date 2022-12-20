import { useState } from 'react';
import './App.css';
import Accessibility from './Components/Accessibility/Accessibility';
import Codesplitting from './Components/Codesplitting/Codesplitting';
import ContextImp from './Components/Context/ContextImp';
import Forward from './Components/ForwardRefs.js/Forward';
  import MainConcepts from './Components/MainConcepts';
import Thinkreact from './Components/Thinkreact';
import { setTheme as SetTheme, theme } from './ThemesForall'
import HighOrder from './Components/HighOrderComponent/HighOrder';
import MouseRender from './Components/RenderProps/MouseRender';
import Uncontrolled from './Components/RenderProps/Uncontrolled';
import PropsType from './Components/RenderProps/PropsType';
import MainHooks from './Components/Hooks/MainHooks';
import UsingEffects from './Components/Hooks/UseingEffects';
import Axios from './Components/Hooks/Axios';

function App() {
  let [display, setDisplay] = useState(<Axios />)
  let [themes, setTheme] = useState(theme.light)
  function settheme(e) {
    if (e.target.checked) {
      setTheme(theme.dark)
    }
    else {
      setTheme(theme.light)
    }
  }
  return (
    <div className="App">
      <button onClick={() => { setDisplay(<MainConcepts />) }} >Main Concepts</button>
      <button onClick={() => { setDisplay(<Thinkreact />) }} >Think in react</button>
      <button onClick={() => { setDisplay(<Accessibility />) }} >Accessibility</button>
      <button onClick={() => { setDisplay(<Codesplitting />) }} >Code-Splitting</button>
      <button onClick={() => { setDisplay(<ContextImp />) }} >ContextImp</button>
      <button onClick={() => { setDisplay(<Forward />) }} >Forward</button>
      <button onClick={() => { setDisplay(<HighOrder />) }} >High Order Component</button>
      <button onClick={() => { setDisplay(<MouseRender />) }} >Render props</button>
      <button onClick={() => { setDisplay(<Uncontrolled />) }} >Uncontrolled Component</button>
      <button onClick={() => { setDisplay(<PropsType id={1} name={'Sample'} fun={() => { return 1 }} />) }} >Prop types</button>
      <button onClick={() => { setDisplay(<MainHooks />) }}>Hooks concept</button>
      <button onClick={() => { setDisplay(<UsingEffects />) }}>UsingEffects</button>
      <button onClick={() => { setDisplay(<Axios />) }}>Axios</button>

      <SetTheme.Provider value={themes}>
        <input id='theme' type={'checkbox'} onChange={settheme}></input> <label htmlFor='theme' >Dark</label>{'  '}
        <button onClick={() => { console.clear() }} >Clear Console</button>
        {display}
      </SetTheme.Provider>

    </div>
  );
}

export default App;
