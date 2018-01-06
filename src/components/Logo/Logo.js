import React, { Component } from 'react';

import logo from './logo.png';
import './Logo.css';

class Logo extends Component {

  render() {
    return(
      <div id="logo">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <span>MOBIL<span>JÉG</span></span>
      </div>
    );

  }
}

export default Logo;
