import React, { useContext } from 'react';

import { SlideInContext } from '../../contexts'

export default function SlideInButton({id, children}) {

  const { openMenu } = useContext(SlideInContext)

    return(
    <div className="slide-in-button" onClick={() => openMenu(id)}>
      {children}
    </div>
  )
}
