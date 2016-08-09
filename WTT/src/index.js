import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory} from 'react-router';
import Login from './components/Login';
import Header from './components/Header';
import './stylesheets/index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path='/Header' component={Header} />
    <Route path="/login" component={Login}></Route>
  </Router>,


  document.getElementById('root')
);
