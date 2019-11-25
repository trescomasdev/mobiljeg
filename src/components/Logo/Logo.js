import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.png'
import './Logo.css'

function Logo() {

  return(
    <div className="logo">
      <Link to="/">
        <div><img alt="logo" src={logo} /></div>
        <span>MOBIL<span>JÉG</span></span>
      </Link>
    </div>
  )

}

export default Logo
