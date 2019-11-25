import React from 'react'
import FontAwesome from 'react-fontawesome'

import { Logo, SlideInButton} from '../../components'

import './Header.css'

export default function Header(){

  return(
    <header id="header">
      <div className="block nav">
        <SlideInButton id="left">
          <FontAwesome name="bars"/>
        </SlideInButton>
      </div>
      <div className="block brand">
        <Logo />
      </div>
      <div className="block user-nav">
        <SlideInButton id="right">
          <FontAwesome name="user"/>
        </SlideInButton>
      </div>
    </header>
  )
}
