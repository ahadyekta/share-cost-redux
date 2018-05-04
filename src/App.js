import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      members : localStorage.members ? JSON.parse(localStorage.members) : [],
    }
  }
  updateMembers(){
    localStorage.members= JSON.stringify(this.state.members);
  }// update local storage

  addMember = (e) => {
    e.preventDefault()
    if(this.state.members.indexOf(this._name.value) > -1){
      this._name.value=''
      return;
    }
    let newMembers = [...this.state.members,this._name.value]
    this.setState({
      members : newMembers
    }, this.updateMembers);

    this._name.value=''
   
  }// add a member to local storage

  removeMember(i,e){
    e.preventDefault()
    var r = window.confirm("Are you sure?");
    if (r == true) {
      let expenses = localStorage.expenses ? JSON.parse(localStorage.expenses) : []
      let result = true
      expenses.map((val,key) => {
        if(val.payer===this.state.members[i] || val.receivers.join().indexOf(this.state.members[i])>-1 ){
          console.log(this.state.members[i],val.receivers.join().indexOf(this.state.members[i]))
          result = false
        }
      })
      if(result===false){
        alert("you cannot delete a person who is used in expenses")
        return;
      }
      let list = this.state.members
      list.splice(i,1)
      this.setState({
        members : list
      }, this.updateMembers)
    } 

  }// remove a member from the local storage
  render() {
    return (
      <div className="App">
      <div className="header">
       <h1>People</h1>
      </div>
        <table className="member-list table">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Operation</th>
            </tr>    
        </thead>
        <tbody>
          {
            this.state.members.map((name,i) => 
              <tr key={i}>
                <td>{i}</td>
                <td>{name}</td>
                <td><a href="#" className="btn btn-default" onClick={(e) => this.removeMember(i,e)} title="delete">Delete</a></td>
           
              </tr>
            )
          }
          </tbody>
        </table>
          
        <form className="member-add" onSubmit={this.addMember} className="form-inline">

              <div className="form-group">
                <label className="control-label">Name</label>
                <input type="text" className="form-control" placeholder="write a Name" ref={input => this._name=input} required/> 
              </div>
            
                <button className="btn btn-primary" >Add</button>
                <br />
        </form>
      </div>
    );
  }
}

export default App;
