import React, {Component} from 'react';
import Firebase from "../utils/firebase.js";

class GiftList extends Component {
  constructor(){
    super();
    this.state = {
      favInfo: []
    }
  }



  render(){
    let user = this.props.params.user;
    return (
      <div>
        hi
      </div>
    )
  }
}

export default GiftList
