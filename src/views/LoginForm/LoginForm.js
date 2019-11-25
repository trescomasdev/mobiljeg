import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from "react-redux"

import { validate, changeInput, submit } from '../../actions/forms/loginFormActions'

import { LabeledInput, Button } from '../../components'

import './LoginForm.css'

const validation = {
  password: {
    required: true
  },
  email: {
    required: true,
    type: "email"
  }
}

function LoginForm({inputs, error, validated, onChangeInput, onSubmitForm}) {
  return(
    <div className="form-wrapper">
      <div id="login-form" className="form">
        <h1><FontAwesome name='user' /> Bejelentkezés</h1>
        <LabeledInput name="email" type="text" placeholder="Email" value={inputs.email} error={error} onChange={onChangeInput}/>
        <LabeledInput name="password" type="password" placeholder="Jelszó" value={inputs.password} error={error} onChange={onChangeInput}/>
        <div className="actions">
          <Button type="main" disabled={!validated} onClick={onSubmitForm}>Bejelentkezés</Button>
          <Button className="forget-password"><FontAwesome name='key' />Elfelejtett jelszó</Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ...state.loginForm })

const mapDispatchToProps = dispatch => ({
  onChangeInput: e => {
    dispatch(changeInput(e.target, validation))
  },
  onSubmitForm: e => {
    e.preventDefault()
    dispatch(validate(validation))
    dispatch(submit())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
