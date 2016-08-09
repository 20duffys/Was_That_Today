import axios from 'axios';

export default {
  search: function(){
    return axios.get('http://localhost:5555/search')
  }
}
