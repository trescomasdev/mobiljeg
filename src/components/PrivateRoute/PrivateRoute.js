import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

export default function PrivateRoute({component, path, redirectUrl, condition, exceptions, exact, computedMatch, location}) {

  let Component = component

  return <Route path={path} render={ props => {
    const _location = props.location
    let _redirectUrl = redirectUrl || (_location.state && _location.state.from ? _location.state.from : "/")

    if (exceptions) _redirectUrl = exceptions.includes(_redirectUrl) ? "/" : _redirectUrl

    if (!!condition) return <Redirect
      to={{
        pathname: _redirectUrl !== window.location.pathname ? _redirectUrl : "/",
        state: { from: _location.pathname }
    }} />

    return <Component {...props} />
  }} exact={exact} computedMatch={computedMatch} location={location} />

}

PrivateRoute.contextTypes = {
  router: PropTypes.object
}
