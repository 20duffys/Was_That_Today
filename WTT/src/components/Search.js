import React, {Component} from 'react'
import axios from '../utils/helper.js'

/*
  Written by Austin
*/
class Search extends Component {

  productSearch(event){
    event.preventDefault();
    let searchItem = event.target.elements[0].value;
    if(searchItem !== null || searchItem.length !== 0){
      axios.search(searchItem).then((res) => {
          console.log(res.data);
      })
    }
  }

  render(){
    return(
      <div>
        <form className="search-form" onSubmit={(event) => this.productSearch(event)}>
          <input type="text"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
