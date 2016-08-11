import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Firebase from '../utils/firebase.js'
import "../stylesheets/NewUser.css"
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

/*
 Written by Austin, edited by Joe
*/
class NewUser extends Component {

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

  createUser(username, password){
    //TODO CHECK FOR DUPLICATE USERS
    //add to db
    let newUser = {
      name: username,
      password: password,
      FavoriteItems: []
    };

    Firebase.addNewUser(newUser).then((json)=>{
      console.log("Added!");
    })

  }

  handleNewUser(event){
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    //only go to the page if the username value isn't null or the length isn't zero
    //TODO need to do user auth and validation with firebase
    if(username !== undefined && password !== undefined){
      if((username.length !== 0) && (password.length !== 0 )){
        this.createUser(username, password);
        const path = `/userPanel/${username}/`;
        browserHistory.push(path);
      }
    }
    else {
      this.setState({status: "Error has occured"});
    }
  }

  render(){
    return(
      <div id='new-user-div'>
        <form onSubmit={(event) => this.handleNewUser(event)}>
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
       <Button className="create-btn" type="submit">Create Account</Button>
      </form>
      <div id="error">{this.state.status}</div>
    </div>
    )
  }
}
export default NewUser
