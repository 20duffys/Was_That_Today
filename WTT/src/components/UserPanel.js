// By Sam Duffy edited By Austin
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import Firebase from '../utils/firebase.js';
import GiftList from './GiftList';

class UserPanel extends Component {
  constructor() {
    super();
    this.state ={
      username: ""
    }
  }

  displaySearch(user){
    this.setState({ username: user});
    console.log("UP,S",this.state);
    browserHistory.push(`/search/${this.props.params.user}`);
  }

  displayGiftList(user){
    this.setState({ username: user});
    console.log("UP,S",this.state);
    browserHistory.push(`/giftlist/${this.props.params.user}`);
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
      browserHistory.push(`/userPanel/giftlist/${this.props.params.user}`);
    })

  }

  render(){
    return(
      <div>
        <div>Welcome {this.props.params.user}!<Link to="/">(Logout)</Link></div>
        <div id="search-link">
          <button onClick={(event) => this.displaySearch(this.props.params.user)}>Search</button>
        </div>
        <div id="see-all-btn">
          <button onClick={(event) => this.displayFavorites(this.props.params.user)}>View Gift List</button>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default UserPanel
