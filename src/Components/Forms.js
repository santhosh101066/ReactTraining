import React, { Component } from 'react';


class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            select: 'grape'
        }
        this.whileUserInput = this.whileUserInput.bind(this)
        this.submitText = this.submitText.bind(this)
        this.chooseOptions = this.chooseOptions.bind(this)
        this.submitFruits = this.submitFruits.bind(this)
        this.multipleHandling = this.multipleHandling.bind(this)
        this.handleInputs=this.handleInputs.bind(this)
    }
    whileUserInput(event) {
        this.setState({ textValue: event.target.value })
    }
    submitText(event) {
        alert('The given text is ' + (this.state.textValue || 'empty try again'))
        event.preventDefault()
        this.setState({ textValue: '' })
    }
    chooseOptions(event) {
        this.setState({ select: event.target.value })

    }
    submitFruits(event) {
        alert('You have submitted ' + this.state.select)
        this.setState({ select: 'grape' })
        event.preventDefault()
    }
    multipleHandling(event) {
        if (this.state.textValue === '') {
            alert('Text field is empty')
        }
        else {
            alert(`The entered text is ${this.state.textValue}\nThe selected fruit is ${this.state.select}`)
        }
        event.preventDefault()
    }
    handleInputs(event){
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitText}>
                    Enter text : <input type={'text'} value={this.state.textValue} onChange={this.whileUserInput}></input>
                    <input type={'submit'} value={'Submit'}></input>
                </form>
                <span>The user entered text is {this.state.textValue || 'Empty'}</span>
                <br></br><br></br>
                <form onSubmit={this.submitFruits}>
                    Select the Fruit {' '}
                    <select value={this.state.select} onChange={this.chooseOptions}>
                        <option value={'apple'}>Apple</option>
                        <option value={'orange'}>Orange</option>
                        <option value={'pinapple'}>Pineapple</option>
                        <option value={'mango'}>Mango</option>
                        <option value={'grape'}>Grape</option>
                    </select>
                    <input type={'submit'} value={'Submit'} />
                </form>

                <h3>Handling multiple input fields</h3>
                <form onSubmit={this.multipleHandling}>
                    Enter text : <input type={'text'} name={'textValue'} value={this.state.textValue} onChange={this.handleInputs}></input><br />
                    Select the Fruit {' '}
                    <select value={this.state.select} name={'select'} onChange={this.handleInputs}>
                        <option value={'apple'}>Apple</option>
                        <option value={'orange'}>Orange</option>
                        <option value={'pinapple'}>Pineapple</option>
                        <option value={'mango'}>Mango</option>
                        <option value={'grape'}>Grape</option>
                    </select> <br></br>
                    <input type={'submit'} value={'Submit'}></input>
                </form>
            </div>
        );
    }
}

export default Forms;