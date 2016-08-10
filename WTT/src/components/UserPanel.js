import React, { Component } from 'react';
import {Link} from 'react-router';
import Search from "./Search";

class UserPanel extends Component {

  render(){
    return(
      <div>Welcome {this.props.params.user}!<Link to="/logout">(Logout)</Link>
      <Search />
      </div>
    )
  }
}

export default UserPanel
