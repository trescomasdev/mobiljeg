import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Navigation extends Component {

  constructor(props){
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this)
  }

  onChangeLocation(e){
    this.props.history.push(e.target.getAttribute("to"))
  }

  render() {
    return(
      <div id="menu-header">
        {this.props.isAuthenticated
        ?
          <div className="authenticated">
            <div className="user-name">
              <FontAwesome name='user' /><b>{this.props.user.email}</b>
            </div>
            <div className="actions">
              <button to="/profil" onClick={this.onChangeLocation}><FontAwesome name='user' />Profil</button>
              <button onClick={this.props.logout}><FontAwesome name='sign-out' />Kijelentkezés</button>
            </div>
          </div>
        :
          <div className="require-auth">
            <div className="actions">
              <button to="/login" onClick={this.onChangeLocation}><FontAwesome name='user' />Bejelentkezés</button>
              <button to="/login" onClick={this.onChangeLocation}><FontAwesome name='user' />Regisztráció</button>
            </div>
          </div>
        }
      </div>
    );

  }
}

export default Navigation;
