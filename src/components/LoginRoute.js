import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from "../containers/Login/Login";

class LoginRoute extends Component {

  render() {
      return this.props.isAuthenticated
        ?
          <Redirect to={{
            pathname: this.props.location && this.props.location.state ? this.props.location.state.from : "/",
            state: { from: "/login"}
          }} />
        :
          <Route exact path="/login" component={Login} />
  }

}

export default connect(state => ({
  isAuthenticated: state.user.isAuthenticated,
}))(LoginRoute);
