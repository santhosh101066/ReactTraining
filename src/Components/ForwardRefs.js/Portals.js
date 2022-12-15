import  ReactDOM  from 'react-dom'; 

function Portals(props) {
    const comp=ReactDOM.createPortal(<div>rendered manually from portal</div>,document.createElement('div'))
    return (
        
        <div>{comp}</div>
    );
}

export default Portals;