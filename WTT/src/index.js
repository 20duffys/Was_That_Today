import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory} from 'react-router'
import Login from './components/Login'
import './stylesheets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/login" component={Login}></Route>
  </Router>,
  document.getElementById('root')
);
