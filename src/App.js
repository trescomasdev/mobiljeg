import React from 'react'
import { Provider } from 'react-redux'

import store from "./store"
import { SlideInProvider } from './contexts'
import Router from "./router"

function App() {

  return(
    <Provider store={store}>
      <SlideInProvider>
        <Router />
      </SlideInProvider>
    </Provider>
  )

}

export default App
