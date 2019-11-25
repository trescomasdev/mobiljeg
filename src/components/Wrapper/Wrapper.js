import { useEffect, useContext } from 'react'

import { SlideInContext } from '../../contexts'
import history from '../../history'

export default function Wrapper({children}) {

  const { closeMenu } = useContext(SlideInContext)
  // const { closeModal } = useContext(ModalContext)

  useEffect(() => {
    history.listen((location) => {
      // closeModal()
      closeMenu()
    })
// eslint-disable-next-line
  }, [])

  return children
}
