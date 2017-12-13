import React, { Component } from 'react';
import { connect } from "react-redux";

import { checkStatus } from '../../actions/ticketActions';

import PaymentSuccess from '../../components/PaymentSuccess/PaymentSuccess';


class Checkout extends Component {
  constructor(props){
    super(props)


    this.renewSession = this.renewSession.bind(this);
    this.printTicker = this.printTicker.bind(this);
  }

  componentWillMount(){
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const paymentId = params.get('paymentId');

    this.props.checkStatus(paymentId);
  }

  printTicker(){
    window.print();
  }

  renewSession(){
    this.props.history.push("/")
  }

  render() {
    return (
      <div id="profil" className="section">

          <div className="container">

            <div className="block-content">
              <div className="col-md-12">
                <PaymentSuccess payment={this.props.payment} ticket={this.props.ticket} renewSession={this.renewSession} printTicker={this.printTicker}/>
              </div>
            </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.payment });

const mapDispatchToProps = dispatch => ({
  checkStatus: (paymentId) => {
    dispatch(checkStatus(paymentId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
