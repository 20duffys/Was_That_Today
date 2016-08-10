/*
Written by Joe
*/

import React from 'react';
import '../stylesheets/ItemCard.css';
import { Link } from react-router;

class ItemCard extends Component {
  render() {
    return(
      <div className='item-card'>
        <ul>
          <li><img className='item-img' src='http://sem3-idn.s3-website-us-east-1.amazonaws.com/3739c679f6d14155387abad06d9e8a68,0.jpg'/></li>
          <li><h5 className='item-name'>Apple iPhone 6 - 4.7\ - 16 GB - Gold</h5></li>
          <li><p className='item-price'>$549.99</p></li>
          <li><a className='item-link' href="https://www.amazon.com/dp/B00NQGP3SO">Click Here to Buy!</a></li>
          <li><button className='save-button'>Save to Your Gift List</button></li>
        </ul>
      </div>
    )
  }
}

export default ItemCard;
