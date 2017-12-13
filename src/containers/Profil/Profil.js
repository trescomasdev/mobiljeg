import React, { Component } from 'react';
import { connect } from "react-redux";

class Profil extends Component {

  render() {
    return (
      <div id="profil" className="section">

          <div className="container">

            <div className="block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Profil</h1>
              </div>
            </div>

        </div>
         
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Profil);
