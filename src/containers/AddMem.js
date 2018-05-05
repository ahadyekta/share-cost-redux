import React, { Component } from 'react';
import {addPerson} from "../actions/index";
import {connect} from 'react-redux'

class AddMem extends Component {
    constructor(props) {
        super(props)
    }
    addMember = (e) => {
        e.preventDefault()
        if(this.props.members.indexOf(this._name.value) > -1){
            this._name.value=''
            return;
        }
        this.props.addMember(this._name.value)
        this._name.value=''

    }// add a member to local storage

    render() {
        return (
            <form className="member-add form-inline" onSubmit={this.addMember}>

                <div className="form-group">
                    <label className="control-label">Name</label>
                    <input type="text" className="form-control" placeholder="write a Name" ref={input => this._name=input} required/>
                </div>

                <button className="btn btn-primary" >Add</button>
                <br />
            </form>
        );
    }
}
const mapStateToProps= state => ({
    members : state.members,
    expenses: state.expenses
})

const mapDispatchToProps= dispatch => ({
    addMember : name => dispatch(addPerson(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddMem)
