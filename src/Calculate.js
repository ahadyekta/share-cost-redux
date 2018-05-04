import React, { Component } from 'react';
import './App.css';

class Calculate extends Component {
  constructor() {
    super()
    this.state = {
      members : localStorage.members ? JSON.parse(localStorage.members) : [],
      expenses: localStorage.expenses ? JSON.parse(localStorage.expenses) : [],
      result : {}
    }

    this.total = 0
    
  }
  componentDidMount(){
    this.compute()
  }
  compute = () => {
    let finalArray = {}
    this.state.members.map((name,i) => {
      finalArray[name] = 0
    })
   
    this.state.expenses.map((row,i) => {
      row.amount = parseInt(row.amount)
      finalArray[row.payer]= finalArray[row.payer] + row.amount //first add the payer amount
      row.receivers.map((receiver,i) => {
        finalArray[receiver] = finalArray[receiver] - (row.amount/row.receivers.length)
      })
    })

    let total = 0
    Object.keys(finalArray).map((name) => {
      total = total + finalArray[name]
    })
    this.total = Math.round(total)

    this.setState({
      expenses : this.state.expenses,
      members : this.state.members,
      result : finalArray
    });  
  }// make an array of members with their numbers

  roundNumber(num, scale) {
    if(!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + scale)  + "e-" + scale);
    } else {
      var arr = ("" + num).split("e");
      var sig = ""
      if(+arr[1] + scale > 0) {
        sig = "+";
      }
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
  }

  offer(){
    let gainer = [
      {'name':'gainer1', 'amount':4000},
      {'name':'gainer2', 'amount':483.33},
    ]
    let payer = [
      {'name':'payer1', 'amount':2400},
      {'name':'payer2', 'amount':2083.33},
    ]

    let result = [
      {'payer':'x','gainer':'y','amount':'z'}
    ]



  }
  render() {
    return (
      <div className="App">
        <h1>Result:</h1>
        
        <table className="result-box table">
                      <thead>
                        <tr>
                        
                        <th>Name</th>
                        <th>Amount</th>
                        <th>to Do</th>
                        </tr>
                      </thead>
                      <tbody>

           
           {Object.keys(this.state.result).map((i,key)=>{
            
             return (
             
                          <tr key={i}>   
                              <td>{i}</td>
                              <td>{this.roundNumber(this.state.result[i],2)}</td>
                              <td>{ this.state.result[i]!=0 ? (this.state.result[i]>0 ? "gain" : "pay") : "nothing"}</td>
                          </tr>
                    )
           })}
           <tr className="total">
              <td>Total</td>
              <td>{this.total}</td>
              <td>&nbsp;</td>
             </tr>
            </tbody>
            </table>



      </div>
    );
  }
}

export default Calculate;
