import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from "react-redux";

import { validate, changeInput, submit } from '../../actions/forms/loginFormActions';

import LabeledInput from '../LabeledInput/LabeledInput';

import './LoginForm.css';

const validation = {
  password: {
    required: true
  },
  email: {
    required: true,
    type: "email"
  }
}

class LoginForm extends Component {

  render() {
    return(
      <div id="login-form" className="shadow-6">
        <h1><FontAwesome name='user' /> Bejelentkezés</h1>
        <LabeledInput name="email" type="text" placeholder="Email" value={this.props.inputs.email} error={this.props.error} onChange={this.props.onChangeInput}/>
        <LabeledInput name="password" type="password" placeholder="Jelszó" value={this.props.inputs.password} error={this.props.error} onChange={this.props.onChangeInput}/>
        <input type="submit" className="btn btn-fullwidth" value="Bejelentkezés" disabled={!this.props.validated} onClick={this.props.onSubmitForm}/>
        <span className="forget-password"><FontAwesome name='key' />Elfelejtett jelszó</span>
      </div>
    );

  }
}

const mapStateToProps = state => ({ ...state.loginForm });

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
