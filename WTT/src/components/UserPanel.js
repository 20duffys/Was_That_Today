// By Sam Duffy edited By Austin
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import Search from "./Search";


class UserPanel extends Component {
  constructor(props){
    super(props);
  }

  displaySearch(){
    browserHistory.push("/search")
  }

  render(){

    return(
      <div>
        <div>Welcome {this.props.params.user}!<Link to="/logout">(Logout)</Link></div>
        <div id="search-link">
          <button onClick={this.displaySearch.bind(this)}>Search</button>
        </div>
        <div id="see-all-btn">
          <button>See All</button>
        </div>
      </div>
    )
  }
}

export default UserPanel
