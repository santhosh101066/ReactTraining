import React, { Component, createRef, Fragment } from 'react';
import { setTheme } from '../../ThemesForall';

class Accessibility extends Component {
    static contextType=setTheme
    render() {
        let products = [{ id: 1, name: 'Orange' }, { id: 2, name: 'Apple' }, { id: 3, name: 'Grape' }]
        let fragment = products.map(val => <Products key={val.id} product={val}></Products>)
        let next = products.map(val => <Fragment key={val.id}><dt>{val.id}</dt> <dd>{val.name}</dd></Fragment>)
        return (
            <div style={this.context}>
                <br />
                <br />
                <label htmlFor='sample'>Sample Input : </label>
                <input id='sample' type="text" aria-label={'Sample text'} aria-required="true" name="name" />
                <br />
                <br />
                <h1>Semantic html</h1>
                {next}
                <br></br>
                {fragment}
                <hr></hr>
                <h1>Mouse event</h1>
                <MouseEvent />
            </div>
        );
    }
}

export default Accessibility;

function Products({ product }) {
    return <li key={product.key}>{product.name}</li>
}



class MouseEvent extends Component {
    constructor(props) {
        super(props);
        this.toggler = createRef()
        this.state = {
            isClicked: false
        }
        this.showOptions = this.showOptions.bind(this)
        this.hide = this.hide.bind(this)
    }
    componentDidMount() {
        window.addEventListener('click', this.hide)
        console.log(this.toggler);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.hide)
    }
    showOptions(event) {
        this.setState({ isClicked: !this.state.isClicked })
    }
    hide(event) {
        if(this.state.isClicked && !this.toggler.current.contains(event.target)){
            this.setState({ isClicked: false })
        }
        

    }
    render() {
        return (
            <div  ref={this.toggler}>
                <button onClick={this.showOptions} aria-haspopup='true' aria-expanded={this.state.isClicked}>Select Option</button>
                {this.state.isClicked && 
                <ul className='options'>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li>
                </ul>}
            </div>
        );
    }
}

