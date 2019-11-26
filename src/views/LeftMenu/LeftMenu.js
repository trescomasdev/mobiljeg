import React from 'react'
import { connect } from 'react-redux'

import { SlideIn, Navigation, NavItem } from '../../components'

function LeftMenu({user, logout, isAuthenticated, role}) {
  return(
    <SlideIn id="left" translate="wrapper">
      <Navigation id="main-menu">
        <NavItem target="/jegyvasarlas" icon="ticket" info="Vásárolj jegyet online">Jegyvásárlás</NavItem>
        <NavItem target="/vasarlasi-feltetelek" icon="info" info="Tájékozódj a vásárlásról">Vásárlási feltételek</NavItem>
        <NavItem target="/adatvedelmi-nyilatkozat" icon="shield-alt" info="Adatvédelmi tájékoztató megtekintése">Adatvédelmi nyilatkozat</NavItem>
        <NavItem target="/barion-informaciok" icon="credit-card" info="Online fizetési információk megtekintése">Barion Információk</NavItem>
      </Navigation>
    </SlideIn>
  )
}

export default connect(state => ({
 ...state.user
}))(LeftMenu)
