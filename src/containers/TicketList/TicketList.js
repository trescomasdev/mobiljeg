import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {  Modal, Button } from 'react-bootstrap';

import { getTickets, useTicket } from '../../actions/ticketActions';

import LabeledInput from "../../components/LabeledInput/LabeledInput";
import SortableTable from "../../components/SortableTable/SortableTable";

import './TicketList.css';

class TicketList extends Component {
  constructor(props){
    super(props)

    this.state = {modalOpen: false, changeQty: 1, selectedID: undefined}

    this.onClickRow = this.onClickRow.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.changeQty = this.changeQty.bind(this)
    this.useTicket = this.useTicket.bind(this)
  }

  componentWillMount(){
    this.props.getTickets()
  }

  getStatus(val){
    let status = "fizetésre vár";

    if (val === "Succeeded")
      status = "érvényes"

    if (val === "Expire")
      status = "érvénytelen"

    if (val === "used")
      status = "érvénytelen"

    return status
  }

  onClickRow(data){
    this.toggleModal()
    this.setState({selectedID: data._id})
  }

  toggleModal(){
    this.setState({modalOpen: !this.state.modalOpen})
  }

  changeQty(e){
    this.setState({changeQty: e.target.value})
  }

  useTicket(e){
    this.props.useTicket(e, this.state)
    this.toggleModal()
    this.setState({changeQty: 1})
  }

  render() {

    const dataKeys = [
      // {id: "createdAt", label: "Time", pattern: (val) => moment(val).format('M/D HH:mm:ss')},
      {id: "_id", label: "Azonosító"},
      {id: "name", label: "Név"},
      {id: "email", label: "Email"},
      {id: "phone", label: "Telefon"},
      {id: "qty", label: "Mennyiség", pattern: (val, row) => row['usedQty'] + "/" + val + " db"},
      {id: "summary", label: "Összeg", pattern: (val) => val + " HUF"},
      {id: "status", label: "Státusz", pattern: (val) =>  this.getStatus(val) },
      {id: "createdAt", label: "Dátum", pattern: (val) => moment(val).format('Y. M. D. - HH:mm:ss') },
    ]

    const sortable = [
      {column: "_id", sortFunction: "CaseInsensitive"},
      {column: "name", sortFunction: "CaseInsensitive"},
      {column: "email", sortFunction: "CaseInsensitive"},
      {column: "phone", sortFunction: "CaseInsensitive"},
      {column: "status", sortFunction: "CaseInsensitive"},
      {column: "createdAt", sortFunction: "Date"}
    ]

    const actions = [
      {action: "Felhasznál", clickAction: (data) => this.onClickRow(data)}
    ]

    return (
      <div id="ticket-list" className="section">

        <div className="container">

          <div className="row block-title-holder">
            <div className="col-md-12">
              <h1 className="block-title">Jegyek</h1>
            </div>
          </div>

          <div className="row ticket-list">
            <SortableTable
              dataKeys={dataKeys}
              actions={actions}
              data={this.props.tickets}
              onClick={undefined}
              itemsPerPage={50}
              pageButtonLimit={5}
              sortable={sortable}
              defaultSort={{column: "createdAt", direction: "asc"}}
              defaultSortDescending
              filterable={['name', 'email', '_id', 'createdAt', 'status']}
              hideFilterInput
              noDataText="No matching records found."
            />
          </div>

        </div>

        <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Jegy felhasználása</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LabeledInput type="number" name="qty" value={this.state.changeQty} placeholder="Mennyiség" onChange={this.changeQty}/>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="use-ticket" onClick={this.useTicket}>
              Érvényesít
            </Button>
            <Button className="close-modal" onClick={this.toggleModal}>Bezár</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.tickets});

const mapDispatchToProps = dispatch => ({
  getTickets: () => {
    dispatch(getTickets());
  },
  useTicket: (e, data) => {
    e.preventDefault();
    dispatch(useTicket(data));
  },
  onRenewSession: e => {
    // dispatch(renewSession(e.target, validation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
