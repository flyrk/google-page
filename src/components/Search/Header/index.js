import React, { Component } from 'react';
import logo from './sm-logo.png';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="search-header">
        <img alt="logo" src={logo} className="search-logo" />
        
      </header>
    );
  }
}

export default Header;
