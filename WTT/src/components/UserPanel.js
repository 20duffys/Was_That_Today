import React, { Component } from 'react';
import {Link} from 'react-router'

class UserPanel extends Component {

  render(){
    return(
      <div>Welcome {this.props.params.user}!<Link to="/logout">(Logout)</Link></div>
    )
  }
}

export default UserPanel
