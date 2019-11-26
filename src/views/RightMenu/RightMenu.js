import React, { useContext } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../actions/userActions'

import { SlideIn, Navigation, NavItem, NavButton } from '../../components'
import { SlideInContext } from '../../contexts'

import './RightMenu.css'

function RightMenu({user, logout, isAuthenticated, role}) {

  const { closeMenu } = useContext(SlideInContext)

  const _logout = () => {
    closeMenu()
    logout()
  }
  
  return(
    <SlideIn id="right" side="right" translate="wrapper">
      {user && user.email &&
        <div id="menu-header">
          <div className="user-name">
            <div className="user-email">
              <span className="greetings">Hello,</span>
              <b>{user.name}</b>
            </div>
          </div>
        </div>
      }
      <Navigation id="main-menu">
        {isAuthenticated && <NavItem target="/profil" icon="user" info="Adatlap szerkesztése">Profil</NavItem> }
        {!isAuthenticated &&
          <div>
            <NavItem target="/bejelentkezes" icon="sign-in" info="Van már profilod?">Bejelentkezés</NavItem>
            <NavItem target="/regisztracio" icon="user" info="Először jársz itt?">Regisztráció</NavItem>
          </div>
        }
        {isAuthenticated && role === "admin" &&
          <div className="restricted-items">
            <NavItem target="/jegyek" icon="shopping-cart" info="Vásárlások megtekintése">Jegyek</NavItem>
            <NavItem target="/beallitasok" icon="cog" info="Oldal beállításaink szerkesztése">Beállítások</NavItem>
          </div>
        }
        {isAuthenticated && <NavButton onClick={_logout} icon="sign-out">Kijelentkezés</NavButton>}
      </Navigation>
    </SlideIn>
  )
}

const mapStateToProps = state => ({ ...state.user})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout())
  }
})

 export default connect(mapStateToProps, mapDispatchToProps)(RightMenu)
