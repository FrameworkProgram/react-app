import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div className="App">
        <ul className="App-intro">
            <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/inbox">inbox</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Navigation;
