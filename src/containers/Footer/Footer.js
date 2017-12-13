import React, { Component } from 'react';
import { connect } from "react-redux";

import barion from './barion.png';
import Logo from '../../components/Logo/Logo';

import './Footer.css';

class Footer extends Component {

  render() {
    return(
      <footer id="footer">
        <div className="footer-content">
          <img src={barion} className="barion-logo"/>
          <Logo />
          <span className="copyright">© Minden jog fenttartva.</span>
        </div>
      </footer>
    );

  }
}

export default connect(state => ({
 ...state.user
}))(Footer);
