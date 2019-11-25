import React from 'react'
import { connect } from "react-redux"

import barion from './barion.png'
import { Logo } from '../../components'

import './Footer.css'

function Footer() {
  return(
    <footer id="footer">
      <Logo />
      <span className="copyright">© Minden jog fenttartva.</span>
      <div className="barion-logo"><img alt="barion" src={barion}/></div>
    </footer>
  )
}

export default connect(state => ({
 ...state.user
}))(Footer)
