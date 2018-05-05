import React, { Component } from 'react';
import {Link } from "react-router-dom";
import '../assets/css/App.css';
import AddExp from '../containers/AddExp';
import VisibleExpList from '../containers/VisibleExpList'


class Expenses extends Component {
  render() {
    return (
      <div className="App">
           <div className="header">
              <h1>Expenses</h1>

            </div>
          <div className="add-sec">
          <h4>Add an expense:</h4>
              <AddExp />
          </div>
          <br/>
          <VisibleExpList />
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
