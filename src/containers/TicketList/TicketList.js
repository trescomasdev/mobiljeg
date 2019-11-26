import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { getTickets, useTicket } from '../../actions/ticketActions'
import { LabeledInput, Button, SortableTable } from '../../components'

import './TicketList.css'

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
    let status = "fizetésre vár"

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
      {id: "_id", label: "Azonosító"},
      {id: "name", label: "Név"},
      {id: "email", label: "Email"},
      {id: "qty", label: "Mennyiség", pattern: (val, row) => row['usedQty'] + "/" + val + " db"},
      {id: "summary", label: "Összeg", pattern: (val) => val + " HUF"},
      {id: "status", label: "Státusz", pattern: (val) =>  this.getStatus(val) },
      {id: "createdAt", label: "Dátum", pattern: (val) => moment(val).format('Y. M. D. - HH:mm:ss') },
    ]

    const sortable = [
      {column: "_id", sortFunction: "CaseInsensitive"},
      {column: "name", sortFunction: "CaseInsensitive"},
      {column: "email", sortFunction: "CaseInsensitive"},
      // {column: "phone", sortFunction: "CaseInsensitive"},
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
            <h1 className="block-title">Jegyek</h1>
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
        {this.state.modalOpen &&
          <div>
            <LabeledInput type="number" name="qty" value={this.state.changeQty} placeholder="Mennyiség" onChange={this.changeQty}/>
            <Button type="submit" className="use-ticket" onClick={this.useTicket}>
              Érvényesít
            </Button>
            <Button className="close-modal" onClick={this.toggleModal}>Bezár</Button>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.tickets})

const mapDispatchToProps = dispatch => ({
  getTickets: () => {
    dispatch(getTickets())
  },
  useTicket: (e, data) => {
    e.preventDefault()
    dispatch(useTicket(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
