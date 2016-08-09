import React, { Component } from 'react';
import '../stylesheets/App.css';
import axios from '../utils/helper.js';
<<<<<<< HEAD
=======

>>>>>>> f3e7d209bd9c8e3c2429806582c56091441859df

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
