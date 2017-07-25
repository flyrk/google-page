import React, { Component } from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-right">
          <span className="navbar-link">Gmail</span>
          <span className='navbar-link'>Photos</span>
          <span className='navbar-link navbar-toggle'>☷</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
