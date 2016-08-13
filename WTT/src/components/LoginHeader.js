import React, { Component } from 'react';
import {browserHistory} from 'react-router'

class LoginHeader extends Component {

  constructor(){
    super();
    this.state = {
      loginStatus: "Login"
    }
  }

  handleLogin(){
    browserHistory.push("/login");
  }
  render(){
    return (
      <button id="login-btn" className="loginButton" onClick={(event) =>this.handleLogin()}>{this.state.loginStatus}</button>
    )
  }
}

export default LoginHeader
