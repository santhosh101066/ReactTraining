

import { render, unmountComponentAtNode } from "react-dom";
import api from "./api";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import Axios from "./Components/Hooks/Axios";


test('Axois pass test',async ()=>{
    
    // console.log(await screen.findAllByText('CSS'));
})
let container
beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})
afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container=null
})
it('Fake submitssion on axios',async()=>{
    const fakevalue=[{id:1,title:'Dummy',web:'http://dummy.com'}]
        var mock=new MockAdapter(api)
        mock.onGet('posts').reply(200,fakevalue)
     // eslint-disable-next-line testing-library/no-unnecessary-act
     await  act(async()=>{
        render(<Axios/>,container)
       })
        
     
        expect(container.querySelector('div').textContent).toBe(fakevalue[0].title)
    
})



