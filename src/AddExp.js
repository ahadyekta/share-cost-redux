import React, { Component } from 'react';
import {Grid,Col,Row} from "react-bootstrap"


class AddExp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      receiver : Object.assign([],this.props.members) ,
    }
  }

  resetForm= () => {
    this._amount.value = ''
    this.state.receiver = Object.assign([],this.props.members),
    this._payer.value = Object.assign([],this.props.members)[0]
  }
  resetFormClick = (e) => {
    e.preventDefault
    this.resetForm()
  }
  addExpense = (e) => {
    e.preventDefault()
    this.props.onNewExpense({
      payer : this._payer.value,
      amount : this._amount.value,
      receivers : this.state.receiver
    })
    this.resetForm()
  }// add a expense to local storage

  removeReceiver(i,e){
    e.preventDefault()
    let list = this.state.receiver
    list.splice(i,1)
    this.setState({
      receiver : list
    })
  }// remove a member from the local storage

  render() {
    return (
      <div className="add-exp">
        <form className="receiver-add" onSubmit={this.addExpense}>
          <Grid>
            <Row>
              <Col sm={6}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Payer</label>
                      <select ref={input => this._payer = input} className="form-control">
                          {
                            this.props.members.map((name,key) => 
                              <option value={name} key={key}>{name}</option>
                            )
                          }
                      </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Amount</label>
                <input className="form-control" placeholder="money spent..." type="text" ref={input => this._amount = input} required />
                          
              </div>
              </Col>
              <Col sm={6}>
              <label>Receivers</label>
              
            <ul className="receiver-list">
              {
                this.state.receiver.map((name,i) => 
                  <li key={i}>
                    <a href="#" onClick={(e) => this.removeReceiver(i,e)} title="delete">x</a>
                  {name}
                  </li>
                )
              }
            </ul>
           

              </Col>
            </Row>
          </Grid>

          
          
           
          <div className="footer-form">
            <button className="btn btn-primary">Add expense</button>
            &nbsp;
            <a onClick={this.resetFormClick} className="btn btn-default">Reset</a>
          </div>

          </form>
      </div>
    );
  }
}

export default AddExp;
