import React, { Component } from 'react';
import About from './About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <p>App Component</p>
      </div>
    );
  }
}

export default App;
