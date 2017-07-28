import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-input-box">
          <input type='text' className="searchbar-input" />
        </div>
        <div className="searchbar-btn-group">
          <Link to='/search'>
            <button className="searchbar-btn">Google搜索</button>
          </Link>
          <button className="searchbar-btn">手气不错</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
