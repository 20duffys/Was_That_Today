// By Sam Duffy
import React, { Component } from 'react';
import {Link} from 'react-router';
import Search from "./Search";


function UserPanel (props) {
  return(
    <div>
      <div>Welcome {this.props.params.user}!<Link to="/logout">(Logout)</Link></div>
      <div id='LoginBtn'>
        <button onClick='#'>Search</button>
      </div>
      <div id='SeeAllBtn'>
        <button onClick='#'>See All</button>
      </div>
    </div>

  )
}

export default UserPanel
