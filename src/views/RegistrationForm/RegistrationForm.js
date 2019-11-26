import React from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

import { validate, changeInput, submit } from '../../actions/forms/registerFormActions'

import { LabeledInput } from '../../components'

const validation = {
  name: {
    required: true
  },
  email: {
    required: true,
    type: "email"
  },
  password: {
    required: true
  },
  password2: {
    required: true,
    equals: "password"
  }
}

function RegistrationForm({inputs, error, onChangeInput, validated, onSubmitForm}) {
  return(
    <div className="form-wrapper">
      <div id="registration-form" className="form">
        <h1><FontAwesome name='user-plus' />Regisztráció</h1>
        <LabeledInput name="name" type="text" placeholder="Name" value={inputs.name} error={error} onChange={onChangeInput}/>
        <LabeledInput name="email" type="text" placeholder="Email" value={inputs.email} error={error} onChange={onChangeInput}/>
        <LabeledInput name="password" type="password" placeholder="Jelszó" value={inputs.password} error={error} onChange={onChangeInput}/>
        <LabeledInput name="password2" type="password" placeholder="Jelszó mégegyszer" value={inputs.password2} error={error} onChange={onChangeInput}/>
        <input type="submit" className="btn btn-fullwidth" value="Regisztráció" disabled={!validated} onClick={onSubmitForm}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ...state.registerForm })

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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
