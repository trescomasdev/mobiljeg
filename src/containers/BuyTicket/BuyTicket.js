import React from 'react'

import { BuyTicketForm, BuyTicketInformations } from '../../views'

import './BuyTicket.css'

export default function BuyTicket() {
  return (
    <div id="buy-tickets" className="section">
      <div className="container">
        <div className="buy-tickets">
            <BuyTicketForm />
            <BuyTicketInformations />
        </div>
      </div>
    </div>
  )
}
