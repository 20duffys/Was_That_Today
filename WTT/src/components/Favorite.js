import React, { Component } from 'react';
import '../stylesheets/Favorite.css';
import Firebase from '../utils/firebase.js'

class Favorite extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ""
    }
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
      console.log(json[ukey]["favoriteItems"]);

    //update account
      Firebase.addFavItem(favItem, this.props.user, ukey).then((json)=>{
        console.log("Saved!");
        this.setState({
          message: "Added to Gift List!"
        })
      })
    })

   }

  render() {
    let item = this.props.item;
    console.log(this.props.user);
    console.log("NAMMME", item.name);
    return(
      <div>
        <button id="gift-list-btn" className='gift-list-btn' onClick={(event) => this.addGift(item)}>Save to Gift List</button>
        <br/>
        <div id="gift-message">{this.state.message}</div>
      </div>
    )
  }
}

export default Favorite;
