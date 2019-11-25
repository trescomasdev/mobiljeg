import React from 'react'

import { LoginForm } from '../../views'

import './Login.css'

export default function Login() {
  return (
    <div id="login" className="section">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  )
}
