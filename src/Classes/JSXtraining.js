import React from "react"

function JSXtraining() {
    //variable declaration
    const element = <h2>Hello</h2>
    //embedding expression in JSX
    const name = 'Santhosh'
    const welcome = <h2>Welcome {name}</h2>

    function formater(person) {
        return person.first_name + ' ' + person.last_name
    }
    const person = {
        first_name: 'Santhosh',
        last_name: 'Kumar'
    }
    //specify with children
    const withChild = <div>
        <h3>Child element</h3>
        <img src="logo192.png" alt="sample_image"></img>
    </div>
    //JSX represents Objects
    const createdObj = React.createElement('h2', { style: { backgroundColor: 'green' },}, 'Representational Objects')

    return (<div>
        {element}
        {welcome}
        <h2>{formater(person)}</h2>
        {withChild}
        {createdObj}
        


    </div>);
}

export
    default JSXtraining;