import React from 'react'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import 'moment/locale/hu'

import './PaymentSuccess.css'

export default function PaymentSuccess({payment, ticket}) {
  moment.locale("hu")

  return(
    <div id="payment-success" className="shadow-6">
      <div>
        {payment.Status === "Succeeded"
          ?
            <h1><FontAwesome name='check-circle' />Sikeres vásárlás!</h1>
          :
            <h1><FontAwesome name='times-circle' />Sikertelen vásárlás!</h1>
        }
        <table id="ticket-reciept" className="ticket-reciept">
          <tbody>
            <tr>
              <td>Azonosító</td>
              <td>{payment.PaymentId}</td>
            </tr>
            <tr>
              <td>Név</td>
              <td>{ticket.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{ticket.email}</td>
            </tr>
            {ticket.phone !== ""
              ?
              <tr>
                <td>Telefon</td>
                <td>{ticket.phone}</td>
              </tr>
              :
              <tr/>
            }
            <tr>
              <td>Mennyiség:</td>
              <td>{ticket.qty}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><b>Összesen</b></td>
              <td>{ticket.summary ? ticket.summary + " HUF" : "" } </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
