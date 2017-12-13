import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {

  render() {
      if ((this.props.isAuthenticated && this.props.role === this.props.requiredRole) || (this.props.isAuthenticated && this.props.requiredRole === undefined)){
        return <Route exact path={this.props.path} render={this.props.render} />
      } else if(this.props.isAuthenticated && this.props.role !== this.props.requiredRole){
        return <Redirect to={{ pathname: "/", state: { from: this.props.path} }} />
      } else {
        return <Redirect to={{ pathname: "/login", state: { from: this.props.path} }} />
      }
  }

}

export default connect(state => ({
  isAuthenticated: state.user.isAuthenticated,
  role: state.user.role
}))(PrivateRoute);
