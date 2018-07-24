import React, { Component } from 'react';
import Navigation from '../Navigation';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navigation />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
