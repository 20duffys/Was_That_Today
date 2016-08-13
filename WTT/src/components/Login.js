import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import Firebase from '../utils/firebase.js'
import "../stylesheets/Login.css";


/*
 Written by Austin, edited by Joe
*/
class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      status: ""
    };
  }

  getUserNameValidationState() {
    const userLength = this.state.username.length;
    if (userLength >= 8) return 'success';
    else if (userLength > 5) return 'warning';
    else if (userLength > 0) return 'error';
  }

  getPasswordValidationState(){
    const passwordLength = this.state.password.length;
    if (passwordLength >=3) return 'success';
    else if (passwordLength > 2) return 'warning';
    else if (passwordLength > 0) return 'error';
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleLogin(event){
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    Firebase.findUser(username).then((res) => {

      //only go to the page if the username value isn't null
      if(res !== null){
        //check if the user password matches what is typed

        if(password === res[(Object.keys(res)[0])].password){
          //an extra condition to check if they are undefined or not
          if(username !== undefined && password !== undefined){
            if((username.length !== 0) && (password.length !== 0 )){
              const path = `/userPanel/${username}/`
              browserHistory.push(path);
            }
          }
        }
        //incorrect password
        else {
        this.setState({status: "Password is incorrect"});
        }
        }

      else {
        this.setState({status: "Invalid username or password"});
      }
    })


  }

  render(){
    return(
      <div id='login'>
        <form onSubmit={(event) => this.handleLogin(event)}>
         <FormGroup
           controlId="user-name-group"
           validationState={this.getUserNameValidationState()}>
           <ControlLabel>User Name</ControlLabel>
           <FormControl
             type="text"
             value={this.state.username}
             placeholder="username"
             onChange={this.handleUserNameChange.bind(this)}
           />
           <FormControl.Feedback />
           <HelpBlock>Username must be at least 8 characters long.</HelpBlock>
         </FormGroup>
         <FormGroup
           controlId='password-group'
           validationState={this.getPasswordValidationState()}>
         <ControlLabel>Password</ControlLabel>
         <FormControl
           type="password"
           value={this.state.password}
           placeholder="password"
           onChange={this.handlePasswordChange.bind(this)}
          />
         <FormControl.Feedback />
         <HelpBlock>Password must be at least 3 characters long.</HelpBlock>
         </FormGroup>
       <Button className="login-btn" type="submit">Login</Button>
       <br/>
      </form>
      <p>Don't have an account? <br/> <Link to="login/newUser">create an account</Link></p>
      <Link to="/userPanel/Guest">or Login as Guest</Link>
      <div id="error">{this.state.status}</div>
      {this.props.children}
      </div>
    )
  }
}

export default Login
