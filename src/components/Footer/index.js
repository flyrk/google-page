import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="extr-link">
          <span className="link-word">广告</span>
          <span className="link-word">商务</span>
          <span className="link-word">Google大全</span>
        </div>
        <div className="extr-link">
          <span className="link-word">隐私权</span>
          <span className="link-word">条款</span>
          <span className="link-word">设置</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
