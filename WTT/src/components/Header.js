/*
Written by Joe
*/

import React, { Component } from 'react';
import '../stylesheets/Header.css';

class Header extends Component {
  render(){
    return(
      <div>
        <header className='header'>
          <button className='logoBtnArea'>
            <img className='logo' height="45" width="45" role="presentation" src='gift.png'/>
          </button>
          <h1>Was That Today?</h1>
          <button className='loginButton'>Login</button>
        </header>
      </div>
    )
  }
}

export default Header;
