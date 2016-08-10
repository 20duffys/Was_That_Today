/*
Written by Joe, edited by Austin and Sam
*/

import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import '../stylesheets/Header.css';

class Header extends Component {

  handleLogin(){
    browserHistory.push("/login");
  }

  handleAbout(){
    browserHistory.push("/about")
  }

  render(){
    return(
      <div>
        <header className='header'>
          <button className='logoBtnArea'>
            <img className='logo' height="45" width="45" role="presentation" src='gift.png'/>
          </button>
          <h1>Was That Today?</h1>
          <button className="aboutButton" onClick={this.handleAbout.bind(this)}>About</button>
          <button className="loginButton" onClick={this.handleLogin.bind(this)}>Login</button>
        </header>
      </div>
    )
  }
}

export default Header;
