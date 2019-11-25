import React from 'react'
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function NavItem({target, icon, children, info}) {

  return(
    <NavLink exact to={target} activeClassName="selected">
      <div className="nav-item">
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
    </NavLink>
  )
}
