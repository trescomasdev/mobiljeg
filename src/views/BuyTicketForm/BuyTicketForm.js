import React, { useEffect } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from "react-redux"

import { validate, changeInput, submit, updateFromUser } from '../../actions/forms/buyTicketFormActions'

import { LabeledInput, Button } from '../../components'

import './BuyTicketForm.css'

const validation = {
  name: {
    required: true
  },
  email: {
    required: true,
    type: "email"
  },
  phone: {
    locale: "hu-HU",
    type: "phone"
  },
  qty: {
    required: true,
    min: 1,
    type: "number"
  }
}

function BuyTicketForm({user, inputs, error, onChangeInput, validated, onSubmitForm, updateFromUser}) {
  useEffect(() => {
    updateFromUser()
    validate()
    // eslint-disable-next-line
  }, [user.isAuthenticated])

  return(
    <div id="buy-ticket-form" className="shadow-6">
      <form>
        <h1><FontAwesome name='ticket' />Jegyvásárlás</h1>
        <LabeledInput name="name" type="text" placeholder="Név" value={inputs.name} invertColor error={error} onChange={onChangeInput}/>
        <LabeledInput name="email" type="email" placeholder="Email" value={inputs.email} invertColor error={error} onChange={onChangeInput}/>
        <LabeledInput name="qty" type="text" placeholder="Mennyiség" value={inputs.qty} pattern="[0-9]*" invertColor error={error} onChange={onChangeInput}/>
        <div className="buy-ticket-summary">
          <span>Összesen</span>
          <span className="amount">{inputs.summary} Ft</span>
        </div>
        <Button onClick={onSubmitForm}>Vásárlás</Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user, ...state.buyTicketForm })

const mapDispatchToProps = dispatch => ({
  updateFromUser: () => {
    dispatch(updateFromUser())
  },
  onChangeInput: e => {
    dispatch(changeInput(e.target, validation))
  },
  onSubmitForm: e => {
    e.preventDefault()
    dispatch(validate(validation))
    dispatch(submit())
  },
  validate: e => {
    dispatch(validate(validation))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketForm)
