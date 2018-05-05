import React, { Component } from 'react';
import './assets/css/App.css';

class Home extends Component {
  constructor() {
    super()

    this.state={
      members : localStorage.members ? JSON.parse(localStorage.members) : null,
    }
  }
 
  render() {
    return (
      <div className="App">
          <p>1- add all people who are in the travel</p>
          <p>2- add each expense</p>
          <p>3- press calculate</p>

      </div>

    );
  }
}

export default Home;
