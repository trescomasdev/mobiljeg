import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { connect } from 'react-redux'

import history from './history'
import {authenticate} from './actions/userActions'
import { Login, SignUp, Header, Footer, Profil, Checkout, BuyTicket, TicketList, Options, License, Privacy, Barion } from './containers/'

import { Wrapper, PrivateRoute as PrivateRoute2, ScrollToTop} from './components'
import { LeftMenu, RightMenu } from './views'
import PrivateRoute from './components/PrivateRoute'

class Router extends Component {
  componentWillMount(){
      this.props.dispatch(authenticate())
  }

  render() {
    return(
      <ConnectedRouter history={history}>
        <Route render={({location}) =>
          <ScrollToTop>
            <Wrapper>
              <div id="app">
                <LeftMenu key={`${location.key}-left`} {...this.props}/>
                <RightMenu key={`${location.key}-right`} {...this.props}/>
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
                    <PrivateRoute2 exact path="/bejelentkezes" component={Login} condition={this.props.isAuthenticated} />
                    <PrivateRoute2 exact path="/regisztracio" component={SignUp} condition={this.props.isAuthenticated} />
                    <Redirect to="/" />
                  </Switch>
                  <Route render={(props) => <Footer {...props}/>}/>
                </div>
              </div>
            </Wrapper>
          </ScrollToTop>
        }/>
      </ConnectedRouter>
    )
  }
}

export default connect(state => ({
 ...state.user
}))(Router)
