/*
Written by Joe, edited by Austin
*/

import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import '../stylesheets/Header.css';

class Header extends Component {

  handleLogin(){
    browserHistory.push("/login");
  }

  render(){
    return(
      <div>
        <header className='header'>
          <button className='loginBtnArea'>
            <img className='logo' height="45" width="45" role="presentation" src='gift.png'/>
          </button>
          <h1>Was That Today?</h1>
          <button className="loginButton" onClick={this.handleLogin.bind(this)}>Login</button>
        </header>
      </div>
    )
  }
}

export default Header;
