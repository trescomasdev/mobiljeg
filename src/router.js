import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { connect } from "react-redux"

import history from "./history"
import {authenticate} from './actions/userActions'

import Header from "./containers/Header/Header"
import Footer from "./containers/Footer/Footer"
import Profil from "./containers/Profil/Profil"
import Checkout from "./containers/Checkout/Checkout"
import BuyTicket from "./containers/BuyTicket/BuyTicket"
import TicketList from "./containers/TicketList/TicketList"
import Options from "./containers/Options/Options"
import License from "./containers/License/License"
import Privacy from "./containers/Privacy/Privacy"
import Barion from "./containers/Barion/Barion"

import LoginRoute from './components/LoginRoute'
import PrivateRoute from './components/PrivateRoute'

class Router extends Component {
  componentWillMount(){
      this.props.dispatch(authenticate())
  }

  render() {
    return(
      <ConnectedRouter history={history}>
        <div id="wrapper">
          <Route render={(props) => <Header {...props}/>} />
          <Switch>
            <Route exact path="/" render={(props) => <BuyTicket {...props}/>} />
            <Route exact path="/vasarlasi-feltetelek" render={(props) => <License {...props}/>} />
            <Route exact path="/adatvedelmi-nyilatkozat" render={(props) => <Privacy {...props}/>} />
            <Route exact path="/barion-informaciok" render={(props) => <Barion {...props}/>} />
            <PrivateRoute  path="/jegyek" requiredRole="admin" render={(props) => <TicketList {...props}/>} />
            <PrivateRoute  path="/beallitasok" requiredRole="admin" render={(props) => <Options {...props}/>} />
            <PrivateRoute  path="/profil" render={(props) => <Profil {...props}/>} />
            <Route path="/rendeles" render={(props) => <Checkout {...props}/>} />
            <LoginRoute />
            <Redirect to="/" />
          </Switch>
          <Route render={(props) => <Footer {...props}/>}/>
        </div>
      </ConnectedRouter>
    )
  }
}

export default connect(state => ({
 ...state.user
}))(Router)
