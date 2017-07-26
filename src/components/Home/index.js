import React, { Component } from 'react';
import logo from './google-logo.png';
import './index.css';

import SearchBar from '../SearchBar';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img alt="logo" src={logo} className="home-logo" />
        <SearchBar />
      </div>
    );
  }
}

export default Home;
