import React, {Component} from 'react';
import Firebase from '../utils/firebase.js';
import {browserHistory} from 'react-router';

class DeleteItem extends Component {
  deleteItem(user, favItem, index, dbkey){
    // console.log("User",user);
    // console.log("favItem", favItem);
    // console.log("index",index);
    //console.log("key in DeleteItem", dbkey);
    Firebase.deleteItem(user, dbkey, index).then((res) => {
        browserHistory.push('/giftlist/'+user);
      })


  }
  render(){
    console.log(this.props.dbKey);
    return (
      <button onClick={(event) => this.deleteItem(this.props.user, this.props.item, this.props.index, this.props.dbKey)}>X</button>
    )

  }
}

export default DeleteItem
