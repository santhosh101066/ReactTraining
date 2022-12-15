import React, { Component, Fragment } from 'react';
import { setTheme } from '../ThemesForall';

class Thinkreact extends Component {
    static contextType=setTheme
    render() {
        let Products = [{ categary: 'Mobile', name: 'Samsung', stock: true, price: '₹10000' },
        { categary: 'Mobile', name: 'Redmi', stock: false, price: '₹15000' },
        { categary: 'Mobile', name: 'oppo', stock: true, price: '₹20000' },
        { categary: 'Laptop', name: 'Acer', stock: true, price: '₹50000' },
        { categary: 'Laptop', name: 'Lenovo', stock: false, price: '₹40000' },
        { categary: 'Laptop', name: 'Dell', stock: true, price: '₹70000' }]
        return (
            <div style={this.context}>
                <br></br>
                <Search product={Products} />
                <br></br>
                <ViewTable product={Products} />
            </div>
        );
    }
}

export default Thinkreact;



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.product ? props.product.map(val => <option key={val.name} value={val.name}></option>) : []
        }
        this.manageEvent = this.manageEvent.bind(this)
    }
    manageEvent(event) {
        if (event.target.checked) {
            this.setState({ search: this.props.product.map(val => val.stock && <option key={val.name} value={val.name}></option>) })
        }
        else {
            this.setState({
                search: this.props.product ? this.props.product.map(val => <option key={val.name} value={val.name}></option>) : []
            })
        }
    }

    render() {
        return (
            <div>
                <input list='search' type={'text'} placeholder={'Search'}></input>
                <br></br><br></br>
                <div><input type={'checkbox'} onChange={this.manageEvent} ></input> {' '} Show only on stock product</div>
                <datalist id='search' >
                    {this.state.search}
                </datalist>
            </div>
        );
    }
}



class ViewTable extends Component {
    constructor(props) {
        super(props);
        let previous;
        this.table = this.props.product.map(val => {
            if (previous === val.categary) {
                return (<Rows key={val.name} product={val}></Rows>)
            }
            else {
                previous = val.categary

                return (<><Categary key={val.categary} name={val.categary} /><Rows key={val.name} product={val}></Rows></>)
            }
        })
    }

    render() {

        return (
            <div>
                <table style={{ width: 'fit-content', display: 'block', margin: 'auto' }}>
                    <tbody>{this.table}</tbody>
                </table>
            </div>
        );
    }
}
function Rows(props) {
    return <Fragment><tr>{props.product.stock ? <td>{props.product.name}</td> : <td style={{ color: 'red' }}>{props.product.name}</td>}<td>{props.product.price}</td></tr></Fragment>
}
function Categary(props) {
    return <Fragment><tr><th colSpan={2}>{props.name}</th></tr></Fragment>
}



