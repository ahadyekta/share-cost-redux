import React, { Component } from 'react';
class MemList extends Component {
    constructor(props) {
        super(props)
        this.removeMember= this.removeMember.bind(this)
    }

    removeMember(i,e){
        e.preventDefault()
        var r = window.confirm("Are you sure?");
        if (r == true) {

            let result = true
            this.props.expenses.map((val,key) => {
                if(val.payer===this.props.members[i] || val.receivers.join().indexOf(this.props.members[i])>-1 ){
                    result = false
                }
            })
            if(result===false){
                alert("you cannot delete a person who is used in expenses")
                return;
            }
            this.props.removeMem(i)
        }

    }// remove a member from the local storage

    render(){
        return (
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
                this.props.members.map((name,i) =>
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{name}</td>
                        <td><a href="#" className="btn btn-default" onClick={(e) => this.removeMember(i,e)} title="delete">Delete</a></td>

                    </tr>
                )
            }
            </tbody>
        </table>
        )
    }
}
export default MemList