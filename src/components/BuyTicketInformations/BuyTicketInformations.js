import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './BuyTicketInformations.css';

class BuyTicketInformations extends Component {

  render() {
    return(
      <div id="buy-ticket-informations" className="shadow-6">
        <h1><FontAwesome name='info' />Információk</h1>
        <div className="text-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );

  }
}

export default BuyTicketInformations;
