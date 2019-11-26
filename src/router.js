import React, { useEffect } from 'react'
import { Switch, Redirect, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { ToastContainer } from 'react-toastify'
import { connect } from 'react-redux'

import history from './history'
import {authenticate} from './actions/userActions'
import { Login, SignUp, Header, Footer, Profil, Checkout, BuyTicket, TicketList, Options, License, Privacy, Barion } from './containers/'

import { Wrapper, PrivateRoute, ScrollToTop, AlertBar } from './components'
import { LeftMenu, RightMenu } from './views'

function Router({isAuthenticated, role, dispatch}) {

  useEffect(() => {
    dispatch(authenticate())
    // eslint-disable-next-line
  }, [])

  return(
    <ConnectedRouter history={history}>
      <Route render={({location}) =>
        <ScrollToTop>
          <AlertBar />
          <Wrapper>
            <div id="app">
              <LeftMenu key={`${location.key}-left`} />
              <RightMenu key={`${location.key}-right`} />
              <div id="wrapper">
                <Route component={Header} />
                <Switch>
                  <Route exact path="/" component={BuyTicket} />
                  <Route exact path="/jegyvasarlas" component={BuyTicket} />
                  <PrivateRoute exact path="/regisztracio" component={SignUp} condition={isAuthenticated} />
                  <PrivateRoute exact path="/bejelentkezes" component={Login} condition={isAuthenticated} />
                  <PrivateRoute exact path="/profil" component={Profil} condition={!isAuthenticated} />
                  <PrivateRoute exact path="/jegyek" component={TicketList} condition={!isAuthenticated || role !== "admin"} />
                  <Route exact path="/vasarlasi-feltetelek"component={License} />
                  <Route exact path="/adatvedelmi-nyilatkozat" component={Privacy} />
                  <Route exact path="/barion-informaciok" component={Barion} />
                  <PrivateRoute  path="/beallitasok" component={Options} condition={!isAuthenticated || role !== "admin"} />
                  <Route path="/rendeles" component={Checkout} />
                  <Redirect to="/" />
                </Switch>
                <Route component={Footer} />
              </div>
              <ToastContainer />
            </div>
          </Wrapper>
        </ScrollToTop>
      }/>
    </ConnectedRouter>
  )
}

export default connect(state => ({
 ...state.user
}))(Router)
