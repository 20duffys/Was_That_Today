/*
Written by Joe and Austin
*/

import React, { Component } from 'react';
import '../stylesheets/ItemCard.css';
import Favorite from "./Favorite";

class ItemCard extends Component {

  render() {

    const itemDetails = this.props.itemDetails;
    const user = this.props.user;
    let guest = 0;
    if(user === "Guest") {guest = 1;}

    return(
      <div className='item-cards'>
        {itemDetails.map(function (item, index) {
          return (
            <div className='item-card'key={index}>
              <h5>{item.name}</h5>
              <img alt="product-img" className="item-img" src={item.images[0]}/>
              <p>${item.price}</p>
              {item.sitedetails.map(function (site, index){
                return <div key={index}><a target="_blank" href={site.url}>Link# {index+1}</a></div>
              })}
              { !guest ? <Favorite user={user} key={index} item={item}/> : ""}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ItemCard;
