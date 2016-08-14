import React, {Component} from 'react';
import Firebase from '../utils/firebase.js';
import '../stylesheets/DeleteItem.css';

class DeleteItem extends Component {

  deleteItem(user, userKey, favKey){
    console.log("User",user);
    console.log("userKey", userKey);
    console.log("favKey", favKey);
    Firebase.deleteItem(user, userKey, favKey).then((res) => {
      location.reload();
    })
  }

  render(){
    return (
      <button id="delete-item" onClick={(event) => this.deleteItem(this.props.user, this.props.userKey, this.props.favKey)}></button>
    )
  }
}

export default DeleteItem;
