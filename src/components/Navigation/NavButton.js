import React from 'react'
import FontAwesome from 'react-fontawesome'

export default function NavButton({icon, onClick, children, info}) {

  return(
    <div className="nav-item" onClick={onClick}>
      {icon &&
        <div className="icon">
          <FontAwesome name={icon} />
        </div>
      }
      <div className="label">
        <span>{children}</span>
        {info && <span className="info">{info}</span>}
      </div>
    </div>
  )
}
