import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Expenses from './Expenses';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calculate from './Calculate';


ReactDOM.render(
<Router>
    <div className="wrapper">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
          </ul>
<br />
            <Route  exact  path='/' component={Home} ></Route>  
            <Route path='/people' component={App} ></Route>  
            <Route path='/expenses' component={Expenses} ></Route>  
            <Route path='/calculate' component={Calculate} ></Route>  
    </div>
  
</Router>,
 document.getElementById('root'));
registerServiceWorker();
