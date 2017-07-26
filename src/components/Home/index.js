import React, { Component } from 'react';
import logo from './google-logo.png';
import './index.css';

import Navbar from './Navbar';
import Footer from './Footer';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <div className="home-search-container">
          <img alt="logo" src={logo} className="home-logo" />
          <SearchBar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
