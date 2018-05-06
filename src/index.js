import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Members from './components/Members';
import Home from './Home';
import Expenses from './components/Expenses';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calculate from './Calculate';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware // neat middleware that logs actions
    )
)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="wrapper">
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                </ul>
                <br />
                <Route  exact  path='/' component={Home} ></Route>
                <Route path='/people' component={Members} ></Route>
                <Route path='/expenses' component={Expenses} ></Route>
                <Route path='/calculate' component={Calculate} ></Route>
            </div>
        </Router>
    </Provider>
,
 document.getElementById('root'));
registerServiceWorker();
