import React from 'react'

import './Navigation.css'

export default function Navigation({id, children}) {

  return(
    <div id={id} className="navigation">
      {children}
    </div>
  )

}
