import React, { useEffect, useContext, useRef } from 'react'

import { SlideInContext } from '../../contexts'

import './SlideIn.css'

export default function SlideInMenu({id, translate, side = "left", children}) {

  const { closeMenu, isOpened } = useContext(SlideInContext)
  const element = useRef(null)
  const _isOpen = isOpened(id)

  useEffect(() => {
    const handleClick = (e) => {
      if (!element.current || element.current.contains(e.target)) return false
      if (isOpened(id) && !e.target.classList.contains("slide-in-button"))
      closeMenu()
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("touchend", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("touchend", handleClick)
    }
// eslint-disable-next-line
  }, [_isOpen])

  useEffect(() => {
    let translatedElement = document.getElementById(translate)
    let alertBar = document.getElementById("alert-bar")

    if (!translatedElement) return

    let className = `slide-in-${side}-translate`
    if (alertBar) alertBar.classList.add("slide-in-translate")
    translatedElement.classList.add("slide-in-translate")

    if (isOpened(id)) {
      if (alertBar) alertBar.classList.add(className)
      return translatedElement.classList.add(className)
    }

    if (alertBar) alertBar.classList.remove(className)
    return translatedElement.classList.remove(className)
  })

  return(
    <div id={id} className={`slide-in ${side} ${isOpened(id) ? "opened" : ""}`} ref={element}>
      {children}
    </div>
  )
}
