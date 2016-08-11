// By Sam Duffy edited By Austin
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';

class UserPanel extends Component {
  constructor() {
    super();
    this.state ={
      username: ""
    }
  }

  displaySearch(user){
    console.log(user);
    this.setState({ username: user});
    console.log("UP,S",this.state);
    browserHistory.push(`/search/${this.props.params.user}`);
  }

  render(){
    return(
      <div>
        <div>Welcome {this.props.params.user}!<Link to="/">(Logout)</Link></div>
        <div id="search-link">
          <button onClick={(event) => this.displaySearch(this.props.params.user)}>Search</button>
        </div>
        <div id="see-all-btn">

        </div>
      </div>
    )
  }
}

export default UserPanel
