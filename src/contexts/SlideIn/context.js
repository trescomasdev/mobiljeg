import React, { useState } from 'react'
import { node } from 'prop-types'

const SlideInContext = React.createContext()
const SlideInConsumer = SlideInContext.Consumer

function SlideInProvider({children}) {

  const [menu, toggleMenu] = useState(null)

  const isOpened = (id) => {
    return id === menu
  }

  const openMenu = (id) => {
    toggleMenu(id)
  }

  const closeMenu = () => {
    toggleMenu(null)
  }

  return (
    <SlideInContext.Provider
      value={{
        isOpened: isOpened,
        openMenu: openMenu,
        closeMenu: closeMenu
      }}
    >
      {children}
    </SlideInContext.Provider>
  )
}

SlideInProvider.propTypes = {
  children: node.isRequired,
}

export { SlideInContext, SlideInProvider, SlideInConsumer }
