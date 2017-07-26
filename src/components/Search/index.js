import React, { Component } from 'react';
import logo from './sm-logo.png';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="search-container">
        <header className="search-header">
          <img alt="logo" src={logo} className="search-logo" />
        </header>

      </div>
    );
  }
}

export default Home;
