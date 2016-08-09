import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';
import {Router, Route, browserHistory} from 'react-router';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/Header' component={Header} />
  </Router>,

  document.getElementById('root')
);
