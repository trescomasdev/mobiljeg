import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <div id="dashboard" className="section">
        <div id="home-welcome">
          <div className="container">
            <div className="row block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Üdvözöl a Mobiljég online jegypénztár</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu quis ex condimentum pretium. Etiam facilisis id quam tincidunt finibus. Duis gravida maximus quam eu suscipit. Vivamus mauris dui, molestie et commodo eu, dapibus vitae urna. Morbi sed augue ut arcu dignissim cursus sed ac sapien. </p>
              </div>
            </div>
          </div>
        </div>

        <div id="home-icon-boxes">
          <div className="row">
            <div className="icon-box">
              <FontAwesome name='money' />
              <h2>Jegyvásárlás</h2>
            </div>
            <div className="icon-box">
              <FontAwesome name='ticket' />
              <h2>Megvásárolt jegyek</h2>
            </div>
            <div className="icon-box">
              <FontAwesome name='info' />
              <h2>Információ</h2>
            </div>
          </div>
        </div>

        <div id="references">
          <div className="container">
            <div className="row block-title-holder">
              <div className="col-md-12">
                <h1 className="block-title">Pályáink</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu quis ex condimentum pretium. Etiam facilisis id quam tincidunt finibus. Duis gravida maximus quam eu suscipit. Vivamus mauris dui, molestie et commodo eu, dapibus vitae urna. Morbi sed augue ut arcu dignissim cursus sed ac sapien. </p>
              </div>
            </div>
            <div className="row">
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
