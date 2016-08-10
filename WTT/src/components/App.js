import React, { Component } from 'react';
import '../stylesheets/App.css';
import axios from '../utils/helper.js'
import {Link} from 'react-router';
import About from './About.js';


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
        <Link to="/login">Login</Link>
        <About />
        {this.props.children}
      </div>
    );
  }
}

export default App;
