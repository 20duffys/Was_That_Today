import React, {Component} from 'react'
import axios from '../utils/helper.js'

/*
  Written by Austin, edited by Joe
*/

class Search extends Component {

  constructor(props) {
    super(props);
      this.state = {
        itemImgUrl: "",
        itemName: "",
        itemPrice: "",
        itemBuyUrl: "",
        responseData: []
      }
  }


  productSearch(event) {
    event.preventDefault();
    let searchItem = event.target.elements[0].value;
    if(searchItem !== null || searchItem.length !== 0){
      axios.search(searchItem).then((res) => {
        this.setState({
          responseData: res.data
        })
        console.log(res.data);
      })
    }
  }

  render() {
    const products = this.state.reponse;

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
