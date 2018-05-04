import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor() {
    super()

    this.state={
      members : localStorage.members ? JSON.parse(localStorage.members) : null,
    }
    console.log('bbbbbb',this.state)
  }

  clearAll = (e) => {
    e.preventDefault();
    var r = window.confirm("All entered data will be cleared. Are you sure?");
    if (r === true) {
      localStorage.expenses= [];
      localStorage.members= [];
      this.setState({
        members : null
      }, console.log("this.haveData",this.state))
     
    } 
  }
 
  render() {
    return (
      <div className="App">
          <p>1- add all people who are in the travel</p>
          <p>2- add each expense</p>
          <p>3- press calculate</p>
          
          <div className={this.state.members ? 'footer-clear-all' : 'hidden' } >
         
            <a href="#" className="btn btn-danger" onClick={this.clearAll} title="delete">Clear all data</a>
          </div>
      </div>

    );
  }
}

export default Home;
