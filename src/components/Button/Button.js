import React from 'react'

import { Loader } from '../'

import './Button.css'

export default function Button({id, type, style, className, onClick, loading, children, disabled}){

  return(
    <button id={id} type={type} style={style} className={`button ${className || ""} ${type || ""}`} disabled={disabled} onClick={onClick}>
      <span>{loading && <Loader />}{children}</span>
    </button>
  )

}
