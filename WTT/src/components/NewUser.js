import React, { Component } from 'react';
import {browserHistory} from 'react-router';

/*
 Written by Austin
*/
class NewUser extends Component {

  handleNewUser(event){
    event.preventDefault();
    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    //only go to the page if the username value isn't null or the length isn't zero
    //TODO need to do user auth and validation with firebase
    if(userName !== null || userName.length !== 0){
      const path = `/login/userPanel/${userName}`
      browserHistory.push(path);
    }
  }

  render(){
    return(
      <div id='new-user'>
        <form onSubmit={(event) => this.handleNewUser(event)}>
          <label>UserName: </label>
          <input type="text"></input>
          <label>Password: </label>
          <input type="password"></input>
          <button type="submit">Create Account</button>
        </form>
      </div>
    )
  }
}

export default NewUser
