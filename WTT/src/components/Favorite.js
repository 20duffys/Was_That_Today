/*
Written by Joe and Austin and Sam(This file was done with the group)
*/

import React, { Component } from 'react';
import '../stylesheets/Favorite.css';
import Firebase from '../utils/firebase.js'

class Favorite extends Component {
  constructor(props){
    super(props);
  }

  addGift(item){
    console.log(item);
    let links = [];
    item.sitedetails.map(function (site, index){
      return links.push(site);
    })

    let favItem = {
      name: item.name,
      image: item.images[0],
      price: item.price,
      links: links
    }

    console.log(favItem);

    Firebase.findUser(this.props.user).then((json)=>{
      console.log("User Found", json);

      let ukey = Object.keys(json)[0]; //user key
      // let fkey = Object.keys(json[ukey])[0]; favorite item key
      console.log(json[ukey]["favoriteItems"]);

    // //update account
      Firebase.addFavItem(favItem, this.props.user, ukey).then((json)=>{
        console.log("Saved!");
      })

    })

   }

  render() {
    let item = this.props.item;
    console.log(this.props.user);
    return(
      <div>
        <button id="gift-list-btn" className='gift-list-btn' onClick={(event) => this.addGift(item)}>Save to Gift List</button>
      </div>
    )
  }
}

export default Favorite;
