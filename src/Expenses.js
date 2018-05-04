import React, { Component } from 'react';
import './App.css';
import AddExp from './AddExp';
import {Link } from "react-router-dom";

class Expenses extends Component {
  constructor() {
    super()
    this.state = {
      members : localStorage.members ? JSON.parse(localStorage.members) : [],
      expenses: localStorage.expenses ? JSON.parse(localStorage.expenses) : []
    }
    this.newExpense = this.newExpense.bind(this)

  }
  updateExpense = () =>{
    localStorage.expenses= JSON.stringify(this.state.expenses);
  }// update local storage

  newExpense(exp) {
    
    let newExpenses = [...this.state.expenses,exp]
    const ue = this.updateExpense
    this.setState({
      expenses : newExpenses,
      members : this.state.members
    }, this.updateExpense);    
  }
  deleteExpense(i,e){
    e.preventDefault()
    var r = window.confirm("Are you sure?");
    if (r == false) {
      return;
    }
    let list = this.state.expenses
    list.splice(i,1)
    this.setState({
      expenses : list,
      members : this.state.members
    }, this.updateExpense);    
  }
  render() {
    return (
      <div className="App">
           <div className="header">
              <h1>Expenses</h1>

            </div>
          <div className="add-sec">
          <h4>Add an expense:</h4>
           {this.state.members.length > 1 ? <AddExp members={this.state.members} onNewExpense={this.newExpense} /> :  "First enter at least two people"}
          </div>
          <br/>
          <div className="list-sec">
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


           {this.state.expenses.map((row,i)=>{
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
          </div>
          <br />
          <div className="calculate">
              <Link to="/calculate" className="btn btn-success">Calculate</Link>
          </div>
          <br />
      </div>
    );
  }
}

export default Expenses;
