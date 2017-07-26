import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-input-box">
          <input type='text' className="searchbar-input" />
        </div>
        <div className="searchbar-btn-group">
          <button className="searchbar-btn">Google搜索</button>
          <button className="searchbar-btn">手气不错</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;