import React from 'react'

import { SlideIn, Navigation, NavItem } from '../../components'

export default function Menu({user, logout, isAuthenticated, role}) {
  return(
    <SlideIn id="left" translate="wrapper">
      <Navigation id="main-menu">
        <NavItem target="/" icon="ticket" info="Vásárolj jegyet online">Jegyvásárlás</NavItem>
        <NavItem target="/vasarlasi-feltetelek" icon="info" info="Tájékozódj a vásárlásról">Vásárlási feltételek</NavItem>
        <NavItem target="/adatvedelmi-nyilatkozat" icon="shield-alt" info="Adatvédelmi tájékoztató megtekintése">Adatvédelmi nyilatkozat</NavItem>
        <NavItem target="/barion-informaciok" icon="credit-card" info="Online fizetési információk megtekintése">Barion Információk</NavItem>
      </Navigation>
    </SlideIn>
  )
}
