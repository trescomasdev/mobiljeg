import React, { Component } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div id="login" className="section">

        <div className="container">

          <div className="login-forms">
            <LoginForm />
            <RegistrationForm />
          </div>

        </div>

      </div>
    );
  }
}

export default Login
