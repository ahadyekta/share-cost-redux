import React, { Component } from 'react';
import '../assets/css/App.css';
import VisibleMemList from '../containers/VisibleMemList'
import AddMem from '../containers/AddMem'
class Members extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>People</h1>
                </div>
                <VisibleMemList />
                <AddMem/>
            </div>
        );
    }
}

export default Members;
