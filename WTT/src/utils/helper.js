import axios from 'axios';

export default {
  search: function(productName){
    return axios.get('http://localhost:5555/search/:' + productName)
  }
}
