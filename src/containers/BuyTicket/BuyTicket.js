import React, { Component } from 'react';

import BuyTicketForm from '../../components/BuyTicketForm/BuyTicketForm';
import BuyTicketInformations from '../../components/BuyTicketInformations/BuyTicketInformations';

import './BuyTicket.css';

class BuyTicket extends Component {

  render() {
    return (
      <div id="buy-tickets" className="section">

        <div className="container">

          <div className="buy-tickets">
              <BuyTicketForm />
              <BuyTicketInformations />
          </div>

        </div>

      </div>
    );
  }
}

export default BuyTicket;
