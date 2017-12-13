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
        <Link to="/" onClick={this.handleMenuClick} id="home" >Kezdőlap</Link>
        {this.props.isAuthenticated && this.props.role === "admin" ? <Link to="/jegyek" onClick={this.handleMenuClick} id="ticket-list" >Jegyek</Link> : "" }
        {this.props.isAuthenticated && this.props.role === "admin" ? <Link to="/beallitasok" onClick={this.handleMenuClick} id="options" >Beállítások</Link> : "" }
      </BurgerMenu>
    );

  }
}

export default Menu;
