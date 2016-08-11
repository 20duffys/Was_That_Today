/*
Written by Joe and Austin
*/

import React, { Component } from 'react';
import '../stylesheets/Favorite.css';

class Favorite extends Component {
  constructor(props){
    super(props);
  }

  addGift(item){
    console.log("hey");
    console.log(item);
  }

  render() {
    let item = this.props.item;
    return(
      <div>
        <button className='gift-list-btn' onClick={(event) => this.addGift(item)}>Save to Gift List</button>
      </div>
    )
  }
}

export default Favorite;
