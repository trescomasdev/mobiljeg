import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import { useTicket as applyTicket } from '../../actions'
import { LabeledInput, Button } from '../../components'

import './UseTicketBox.css'

function UseTicketBox({ticket, _applyTicket}){
  const [qty, setQty] = useState(1)
  const [isOpen, toggleOpen] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (!element.current || element.current.contains(e.target)) return false
      toggleOpen(false)
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("touchend", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("touchend", handleClick)
    }
  }, [])

  const _useTicket = (e) => {
    if (!qty > 0) return toast.error("Hibás mennyiség")

    _applyTicket({ticketID: ticket._id, usedQty: qty})
    toggleOpen(false)
    setQty(1)
  }

  return(
    <div className="use-ticket-box" ref={element}>
      <Button type="main" onClick={() => toggleOpen(!isOpen)}>Érvényesít</Button>
      {isOpen &&
        <div className="use-ticket-box-modal">
          <div className="user-info">{ticket.name}</div>
          <LabeledInput type="number" name="qty" value={qty} placeholder="Mennyiség" onChange={(e) => setQty(e.target.value)}/>
          <div className="actions">
            <Button type="main" className="use-ticket" onClick={_useTicket}>Ok</Button>
            <Button onClick={() => toggleOpen(false)}>Mégse</Button>
          </div>
        </div>
      }
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
