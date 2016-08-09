import React, { Component } from 'react';
import '../stylesheets/App.css';
import axios from '../utils/helper.js';


class App extends Component {


  productSearch(){
      axios.search().then((res) => {
        console.log(res.data);
      })

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.productSearch.bind(this)}>Click me</button>
      </div>
    );
  }
}

export default App;
