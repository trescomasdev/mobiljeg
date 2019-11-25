import React, { useEffect } from 'react'
import { connect } from "react-redux"

import { checkStatus } from '../../actions'
import { PaymentSuccess } from '../../views'

function Checkout({ticket, payment, location, checkStatus: _checkStatus}) {

  const search = location.search
  const params = new URLSearchParams(search)
  const paymentId = params.get('paymentId')

  useEffect(() => {
    _checkStatus(paymentId)
  }, [paymentId])

  return (
    <div id="checkout" className="section">
      <div className="container">
        <div className="block-content">
          <PaymentSuccess payment={payment} ticket={ticket} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ...state.payment })

const mapDispatchToProps = dispatch => ({
  checkStatus: (paymentId) => {
    dispatch(checkStatus(paymentId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
