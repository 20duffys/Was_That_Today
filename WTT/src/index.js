/*
Written by Joe, Austin, Sam
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory} from 'react-router';
import About from "./components/About";
import NewUser from './components/NewUser';
import UserPanel from "./components/UserPanel";
import Search from './components/Search'
import Login from './components/Login';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import GiftList from "./components/GiftList"
import './stylesheets/index.css';


ReactDOM.render(
  <div>
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login}></Route>
        <Route path="/login/newUser" component={NewUser}></Route>
        <Route path="/userPanel/:user" component={UserPanel}>
          <Route path="/userPanel/giftlist/:user" component={GiftList}/>
        </Route>
        <Route path="/search/:user" component={Search}>
          <Route path="/search/itemcard/:user" component={ItemCard} />
        </Route>
        <Route path="/giftlist/:user" component={GiftList}></Route>
        <Route path="/about" component={About}></Route>
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
