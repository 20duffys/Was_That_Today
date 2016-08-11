import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ItemCard from './ItemCard';
import axios from '../utils/helper.js';
import "../stylesheets/Search.css"

/*
  Written by Austin, edited by Joe
*/

class Search extends Component {

  constructor(props) {
    super(props);
      this.state = {
        responseData: []
      }
  }


  productSearch(event) {
    event.preventDefault();
    let searchItem = event.target.elements[0].value;
    if(searchItem !== null || searchItem.length !== 0){
      axios.search(searchItem).then((res) => {
        console.log("Search",res.data.results);
        this.setState({
          responseData: res.data.results
        })
        console.log("state after search:", this.state);
        browserHistory.push(`/search/itemcard/${this.props.params.user}`)
      })
    }
  }

  render() {
    const products = this.state.responseData;
    console.log('products', products);
    console.log("Search",this.props.params);
    return(
      <div>
        <form className="search-form" onSubmit={(event) => this.productSearch(event)}>
          <input id="search-box" type="text"></input>
          <button id="search-btn" type="submit">Search</button>
        </form>
        <ItemCard user={this.props.params.user} itemDetails={products}/>
      </div>
    )
  }
}

export default Search
