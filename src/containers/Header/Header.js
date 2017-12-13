import React, { Component } from 'react';
import { connect } from "react-redux";

import { logout } from '../../actions/userActions';

import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';

import './Header.css';

class Header extends Component {

  render() {
    return(
      <header id="header">
        <Menu {...this.props}/>
        <div className="header-content">
          <Logo />
        </div>
      </header>
    );

  }
}

const mapStateToProps = state => ({ ...state.user});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
