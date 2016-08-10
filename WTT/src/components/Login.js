import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import "../stylesheets/Login.css"

/*
 Written by Austin
*/
class Login extends Component {
  constructor(){
    super();
    this.state = {
      user: "Guest"
    };
  }

  handleLogin(event){
    event.preventDefault();
    let email = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    //only go to the page if the username value isn't null or the length isn't zero
    //TODO need to do user auth and validation with firebase
    if(email !== null || email.length !== 0){
      this.setState({user: email});
      console.log("State: ", this.state);
      const path = `/userPanel/${email}/`
      browserHistory.push(path);
    }
  }

  render(){
    return(
      <div id='login'>
        <form onSubmit={(event) => this.handleLogin(event)}>
          <label>E-mail: </label>
          <input type="text" placeholder="e-mail"></input>
          <label>Password: </label>
          <input type="password" placeholder="password"></input>
          <button type="submit">Login</button>
          <Link to="/userPanel/Guest">Login as Guest</Link>
        </form>
          <p>Don't have an account <Link to="login/newUser">create account</Link></p>
        {this.props.children}
      </div>
    )
  }
}

export default Login
