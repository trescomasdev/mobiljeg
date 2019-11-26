import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'

import { useTicket } from '../../actions'
import { LabeledInput, Button } from '../../components'

import './UseTicketBox.css'

function UseTicketBox({ticket, useTicket}){
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
    useTicket({ticketID: ticket._id, usedQty: qty})
    toggleOpen(false)
    setQty(1)
  }

  return(
    <div className="use-ticket-box" ref={element}>
      <Button type="main" onClick={() => toggleOpen(!isOpen)}>Érvényesít</Button>
      {isOpen &&
        <div className="use-ticket-box-modal">
          <LabeledInput type="number" name="qty" value={qty} placeholder="Mennyiség" onChange={(e) => setQty(e.target.value)}/>
          <Button type="main" className="use-ticket" onClick={_useTicket}>Ok</Button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({ ...state.tickets})

const mapDispatchToProps = dispatch => ({
  useTicket: (data) => {
    dispatch(useTicket(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UseTicketBox)
