import React, {Component} from 'react';
import Firebase from '../utils/firebase.js';
import {browserHistory} from 'react-router';
import '../stylesheets/DeleteItem.css'

class DeleteItem extends Component {
  deleteItem(user, userKey, favKey){
    console.log("User",user);
    console.log("userKey", userKey);
    console.log("favKey", favKey);
    Firebase.deleteItem(user, userKey, favKey).then((res) => {
        browserHistory.push('/giftlist/'+user);
      })


  }
  render(){
    return (
      <button id="delete-item" onClick={(event) => this.deleteItem(this.props.user, this.props.userKey, this.props.favKey)}></button>
    )

  }
}

export default DeleteItem
