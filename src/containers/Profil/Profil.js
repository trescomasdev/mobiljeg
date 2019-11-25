import React from 'react'
import { connect } from "react-redux"

function Profil() {
  return (
    <div id="profil" className="section">
      <div className="container">
        <div className="block-title-holder">
          <h1 className="block-title">Profil</h1>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({
  user: state.user
}))(Profil)
