import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

class Inbox extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          inbox
        </p>
      </div>
    );
  }
}

export default Inbox;
