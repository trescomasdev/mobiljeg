import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from "react-redux";

import { validate, changeInput, submit } from '../../actions/forms/registerFormActions';

import LabeledInput from '../LabeledInput/LabeledInput';

import './RegistrationForm.css';

const validation = {
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

class RegistrationForm extends Component {

  render() {
    return(
      <div id="registration-form" className="shadow-6">
        <h1><FontAwesome name='user-plus' />Regisztráció</h1>
        <LabeledInput name="email" type="text" placeholder="Email" value={this.props.inputs.email} error={this.props.error} onChange={this.props.onChangeInput}/>
        <LabeledInput name="password" type="password" placeholder="Jelszó" value={this.props.inputs.password} error={this.props.error} onChange={this.props.onChangeInput}/>
        <LabeledInput name="password2" type="password" placeholder="Jelszó mégegyszer" value={this.props.inputs.password2} error={this.props.error} onChange={this.props.onChangeInput}/>
        <input type="submit" className="btn btn-fullwidth" value="Regisztráció" disabled={!this.props.validated} onClick={this.props.onSubmitForm}/>
      </div>
    );

  }
}

const mapStateToProps = state => ({ ...state.registerForm });

const mapDispatchToProps = dispatch => ({
  onChangeInput: e => {
    dispatch(changeInput(e.target, validation));
  },
  onSubmitForm: e => {
    e.preventDefault();
    dispatch(validate(validation));
    dispatch(submit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
