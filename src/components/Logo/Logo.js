import React, { Component } from 'react';

import logo from './logo.png';
import './Logo.css';

class Logo extends Component {

  render() {
    return(
      <div id="logo">
        <img src={logo} />
        <span id="logo">MOBIL<span>JÉG</span></span>
      </div>
    );

  }
}

export default Logo;
