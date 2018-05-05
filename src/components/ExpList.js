import React, { Component } from 'react';
class ExpList extends Component{
    constructor(props) {
        super(props)
        this.deleteExpense = this.deleteExpense.bind(this)
    }
    deleteExpense(i,e){
        e.preventDefault()
        var r = window.confirm("Are you sure?");
        if (r == false) {
            return;
        }
        this.props.removeExp(i)
    }
    render(){
        return (<div className="list-sec">
            <table className="expense-box table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Payer</th>
                    <th>Amount</th>
                    <th>Receiver</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>


                {this.props.expenses.map((row,i)=>{
                    return (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{row.payer}</td>
                            <td>{row.amount}</td>
                            <td>{row.receivers.join(', ')}</td>
                            <td><a href="#" onClick={(e) => this.deleteExpense(i,e)}>X</a></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>)
    }
}
export default ExpList