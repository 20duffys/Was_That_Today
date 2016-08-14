import axios from 'axios';

export default {
  search: function(productName){
    return axios.get('https://mysterious-taiga-26159.herokuapp.com/search/:' + productName)
  }
}
