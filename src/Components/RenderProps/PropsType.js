import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types'
import WebComps from './WebComps';


function PropsType(props) {
    return (
        <div>
            <h2>id: {props.id} , name:{props.name} , fun:{props.fun()}</h2>
            <FileSubmit />
            <h2>Strict mode</h2>
            <StrictTest />
            <h2>Web Component</h2>
            <WebComps />

        </div>
    );
}
PropsType.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    fun: PropTypes.func
}

export default PropsType;

function FileSubmit() {
    const image = createRef()
    function submit(e) {
        const inp = e.target
        console.log(inp.files[0]);
        const filereader = new FileReader()
        filereader.readAsDataURL(inp.files[0])
        filereader.onload = () => {
            image.current.src = filereader.result
        }

    }
    return <div>
        <input type={'file'} accept={'image/*'} onChange={submit}></input><br></br><br></br>
        <img ref={image} style={{ width: '500px' }} alt='Displayed after loaded' ></img>
    </div>
}


class StrictTest extends Component {
    constructor(props) {
        super(props);
        this.input = createRef()
    }


    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
    // UNSAFE_componentWillUpdate(){

    // }
    componentDidMount() {
        this.input.current.focus()
    }
}

