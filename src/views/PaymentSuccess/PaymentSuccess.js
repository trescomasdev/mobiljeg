import React from 'react'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import 'moment/locale/hu'

import './PaymentSuccess.css'

export default function PaymentSuccess() {
  moment.locale("hu")

  return(
    <div id="payment-success" className="shadow-6">
      <div>
        {this.props.payment.Status === "Succeeded"
          ?
            <h1><FontAwesome name='check-circle' />Sikeres vásárlás!</h1>
          :
            <h1><FontAwesome name='times-circle' />Sikertelen vásárlás!</h1>
        }
        <table id="ticket-reciept" className="ticket-reciept">
          <tbody>
            <tr>
              <td>Azonosító</td>
              <td>{this.props.payment.PaymentId}</td>
            </tr>
            <tr>
              <td>Név</td>
              <td>{this.props.ticket.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.ticket.email}</td>
            </tr>
            {this.props.ticket.phone !== ""
              ?
              <tr>
                <td>Telefon</td>
                <td>{this.props.ticket.phone}</td>
              </tr>
              :
              <tr/>
            }
            <tr>
              <td>Mennyiség:</td>
              <td>{this.props.ticket.qty}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><b>Összesen</b></td>
              <td>{this.props.ticket.summary ? this.props.ticket.summary + " HUF" : "" } </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
