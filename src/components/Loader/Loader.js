import React from 'react'

import './Loader.css'

export default function Loader({type = ""}) {

  return(
    <div className={`loader ${type}`}>
      <span></span>
    </div>
  )
}
