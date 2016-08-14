// By Sam Duffy edited By Austin and Joe
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import '../stylesheets/UserPanel.css';

class UserPanel extends Component {

  constructor() {
    super();
    this.state ={
      username: "",
      FavInfo: []
    }
  }

  displaySearch(user){
    this.setState({ username: user});
    console.log("UP,S",this.state);
    browserHistory.push(`/search/${this.props.params.user}`);
  }

  displayFavorites(user){
    browserHistory.push(`/giftlist/${this.props.params.user}`);
   }

  render(){
    let guest = 0;
    let user = this.props.params.user;
    if(user === "Guest") {guest = 1;}

    return(
      <div id="user-panel-container">
        <div id="welecome-msg">Welcome {this.props.params.user}!<br/><Link to="/">(Logout)</Link></div>
        <div id="search-link">
          <button className="user-panel-btn" onClick={(event) => this.displaySearch(this.props.params.user)}>Search for Gifts</button>
        </div>
        {!guest ?
        <div id="see-all-btn">
          <button className="user-panel-btn" onClick={(event) => this.displayFavorites(this.props.params.user)}>View your Gift List</button>
        </div> : ""}
      </div>
    )
  }
}

export default UserPanel;
