import { cleanup,screen ,render } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
test('renders learn Main concept', () => {
  render(<App />);
   const linkElement = screen.getByText(/Main concepts/i);
   expect(linkElement).toBeInTheDocument();
});
let container;
beforeEach(()=>{
  container=document.createElement('div')
  document.body.appendChild(container)
})
afterEach(()=>{
  unmountComponentAtNode(container)
  container.remove()
  container=null
})
test('Click the button',()=>{
  render(<App/>)
const mainconcept=screen.getAllByRole('button')

act(()=>{
  mainconcept[0].click()
})
screen.findAllByText('Welcome').then((val)=>console.log(val))
})




cleanup()