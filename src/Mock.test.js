import { render, screen } from "@testing-library/react"
import FunctionComp from "./Components/FunctionComp"


jest.mock('./Components/FunctionComp',()=>{
    return function DummyMain(props){
        return <div data-testid='runtest'>
            {props.name}
        </div>
    }
  })
  
  test('Moking component',async()=>{

        render(<FunctionComp name='letseee'/>)
  
    
    expect( (await screen.findByTestId('runtest')).textContent).toBe('letseee')
    
  })