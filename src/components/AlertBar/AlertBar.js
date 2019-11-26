import React from 'react'
import FontAwesome from 'react-fontawesome'

import './AlertBar.css'

export default function AlertBar() {
  if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_BARION_TEST_MODE === "true") return(
    <div id="alert-bar" className={`alert-bar warning active`}>
      <div className="icon"><FontAwesome name="exclamation-triangle" /></div>
      <div className="message">
        <div className="title">Figyelem!</div>
        <span>Az oldal jelenleg teszt üzemmódban üzemel és a jegyvásárlás nem lehetséges! Megértésüket köszönjük!</span>
      </div>
    </div>
  )

  return null
}
