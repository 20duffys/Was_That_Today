import React, { Component } from 'react';

/*
 Written by Austin
*/
class Login extends Component {

  render(){
    return(
      <form>
        <label>UserName: </label>
        <input type="text"></input>
        <label>Password: </label>
        <input type="password"></input>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login
