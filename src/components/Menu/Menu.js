import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import MenuHeader from './MenuHeader';

import './Menu.css';

class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {
      menuOpen: false
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(event) {
    // Using the parent component's state to keep track of the menu
    this.setState({menuOpen: false});
  }

  render() {
    return(
      <BurgerMenu pageWrapId={"wrapper-content"} outerContainerId={"header"} isOpen={ this.state.menuOpen }>
        <MenuHeader {...this.props} handleMenuClick={this.handleMenuClick}/>
        <Link to="/" onClick={this.handleMenuClick} id="buy-tickets" >Jegyvásárlás</Link>
        <Link to="/vasarlasi-feltetelek" onClick={this.handleMenuClick} id="vasarlasi-feltetelek" >Vásárlási feltételek</Link>
        <Link to="/adatvedelmi-nyilatkozat" onClick={this.handleMenuClick} id="adatvedelmi-nyilatkozat" >Adatvédelmi nyilatkozat</Link>
        <Link to="/barion-informaciok" onClick={this.handleMenuClick} id="barion-informaciok" >Barion Információk</Link>
        {this.props.isAuthenticated && this.props.role === "admin" ?
          <div className="restricted-items">
            <div className="divider">Admin</div>
            <Link to="/jegyek" onClick={this.handleMenuClick} id="ticket-list" >Jegyek</Link>
            <Link to="/beallitasok" onClick={this.handleMenuClick} id="options" >Beállítások</Link>
          </div>
        :
          ""
        }
      </BurgerMenu>
    );

  }
}

export default Menu;
