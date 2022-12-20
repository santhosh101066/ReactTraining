import { render, screen } from "@testing-library/react"
import MainHooks from "./Components/Hooks/MainHooks"
import { act } from "react-dom/test-utils"

test('On click test',async()=>{
    render(<MainHooks/>)
    const button =(await screen.findAllByRole('button'))[1]
   await act( async()=>{
        button.click()
        button.click()
    })
    expect((await screen.findByTestId('checkcounter')).textContent).toBe('count: 2')
})