import React, { Component } from 'react';
import './assets/css/App.css';
import {connect} from 'react-redux'

class Calculate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result : {}
    }

    this.total = 0
    
  }
  componentDidMount(){
    this.compute()
  }
  compute = () => {
    let finalArray = {}
    this.props.members.map((name,i) => {
      finalArray[name] = 0
    })
   
    this.props.expenses.map((row,i) => {
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

const mapStateToProps= state => ({
    members : state.members,
    expenses: state.expenses
})

const mapDispatchToProps= dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculate)
