import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import logo from '../../assets/logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="Navigation-logo">
          <img src={logo} alt="logo"/>
        </div>
        <ul className="Navigation-list">
          <li className="Navigation-item"><Link to="/">home</Link></li>
          <li className="Navigation-item"><Link to="/about">about</Link></li>
          <li className="Navigation-item"><Link to="/inbox">inbox</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
