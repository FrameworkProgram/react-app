import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../assets/App.css';
import {home} from '../api/home'

class App extends Component {
  render () {
    return (
      <div className="App">
        <p className="App-intro">
          <Link to="/about">about</Link>
          <Link to="/inbox">inbox</Link>
        </p>
      </div>
    );
  }

  componentWillMount () {
    home().then(res => {
      this.home = res.data
    })
  }
}

export default App;
