import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { getTickets } from '../../actions'
import { SortableTable, Button } from '../../components'
import { UseTicketBox } from '../../views'

import './TicketList.css'

function TicketList({getTickets, tickets}) {
  useEffect(() => {
    getTickets("today")
  }, [getTickets])

  const getStatus = (val) => {
    let status = "fizetésre vár"

    if (val === "Succeeded") status = "érvényes"
    if (val === "Expire") status = "érvénytelen"
    if (val === "used") status = "felhasznált"

    return status
  }

  const dataKeys = [
    {id: "_id", label: "Azonosító"},
    {id: "name", label: "Név"},
    {id: "email", label: "Email"},
    {id: "qty", label: "Mennyiség", pattern: (val, row) => row['usedQty'] + "/" + val + " db"},
    {id: "summary", label: "Összeg", pattern: (val) => val + " HUF"},
    {id: "status", label: "Státusz", pattern: (val) =>  <span className={`ticket-status ${val}`}>{getStatus(val)}</span> },
    {id: "createdAt", label: "Dátum", pattern: (val) => moment(val).format('Y. M. D. - HH:mm:ss') },
  ]

  const sortable = [
    {column: "_id", sortFunction: "CaseInsensitive"},
    {column: "name", sortFunction: "CaseInsensitive"},
    {column: "email", sortFunction: "CaseInsensitive"},
    {column: "status", sortFunction: "CaseInsensitive"},
    {column: "createdAt", sortFunction: "Date"}
  ]

  let _actions = (row) => <UseTicketBox ticket={row} />
console.log("tickets", tickets);
  return (
    <div id="ticket-list" className="section">
      <div className="container">
        <div className="row block-title-holder">
          <h1 className="block-title">Jegyek</h1>
        </div>
        <div className="actions">
          <Button type="main" onClick={() => getTickets("today")}>Ma</Button>
          <Button onClick={() => getTickets("week")}>Hét</Button>
          <Button onClick={() => getTickets("month")}>Hónap</Button>
          <Button onClick={() => getTickets()}>Összes</Button>
        </div>
        <div className="row ticket-list">
          <SortableTable
            dataKeys={dataKeys}
            actions={_actions}
            data={tickets}
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
    </div>
  )
}

const mapStateToProps = state => ({ ...state.tickets})

const mapDispatchToProps = dispatch => ({
  getTickets: (query) => {
    dispatch(getTickets(query))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
