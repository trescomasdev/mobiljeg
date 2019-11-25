import React, { useState } from 'react'
import { node } from 'prop-types'

const ModalContext = React.createContext()
const ModalConsumer = ModalContext.Consumer

function ModalProvider({children}) {

  const [modal, toggleModal] = useState(null)
  const [attributes, setAttributes] = useState({})

  const isOpened = (name) => {
    return modal === name
  }

  const openModal = (name, attributes = {}) => {
    toggleModal(name)
    setAttributes(attributes)
  }

  const closeModal = () => {
    toggleModal(null)
    setAttributes({})
  }

  return (
    <ModalContext.Provider
      value={{
        isOpened: isOpened,
        openModal: openModal,
        closeModal: closeModal,
        attributes: attributes
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: node.isRequired
}

export { ModalContext, ModalProvider, ModalConsumer }
