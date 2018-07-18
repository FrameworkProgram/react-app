import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Link to="/about">about</Link>
          <Link to="/inbox">inbox</Link>
        </p>
      </div>
    );
  }
}

export default App;
