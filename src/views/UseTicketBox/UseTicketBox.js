import React from 'react'
import { connect } from 'react-redux'

import { useTicket as applyTicket } from '../../actions'
import { Button } from '../../components'

import './UseTicketBox.css'

function UseTicketBox({ticket, _applyTicket}){
  return(
    <div className="use-ticket-box">
      <Button type="main" onClick={() => _applyTicket({ticketID: ticket._id})}>Érvényesít</Button>
    </div>
  )
}

const mapStateToProps = state => ({ ...state.tickets})

const mapDispatchToProps = dispatch => ({
  _applyTicket: (data) => {
    dispatch(applyTicket(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UseTicketBox)
