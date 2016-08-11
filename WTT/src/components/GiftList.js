import React, {Component} from 'react';
import Firebase from "../utils/firebase.js";

class GiftList extends Component {
  constructor(){
    super();
    this.state = {
      favInfo: []
    }
  }

  displayFavorites(user){

    Firebase.findUser(user).then((res) => {
        let userInfo = [];
        //convert array
        for(let prop in res){
          userInfo.push(res[prop]);
        }

        console.log(userInfo[0].favoriteItems);
        this.setState({
          favInfo: userInfo[0].favoriteItems
        })
    })
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
