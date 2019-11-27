import React, { Component } from 'react'
import { Table, Thead, Tr, Td, Th} from 'reactable'

import './SortableTable.css'

export default class Orders extends Component {
  render(){
    let tableHeader = this.props.dataKeys.map((data, key) => {
      return(
        <Th key={key} column={data.id}>{data.label}</Th>
      )
    })

    if (this.props.actions && this.props.actions.length > 0)
      tableHeader.push(
        <Th key={this.props.dataKeys.length + 1} column="actions">Műveletek</Th>
      )

    let tableContent = this.props.data.length > 0 ? this.props.data.map((row, key) => {

      let rowData = this.props.dataKeys.map((data, key) => {
        let val = row[data.id]

        if (data.pattern)
          val = data.pattern(val, row)

          return(
            <Td key={key} data-label={data.label} column={data.id} className={row[data.id]}>{val}</Td>
          )
      })

      if (this.props.actions){
        rowData.push(
          <Td key={this.props.dataKeys.length + 1} column="actions"><div className="action-buttons">{this.props.actions(row)}</div></Td>
        )
      }

      return(
        <Tr key={key} onClick={this.props.onClick !== undefined ? () => this.props.onClick(row._id) : undefined}>
          {rowData}
        </Tr>
      )
    }) : []

    let props = {...this.props}
    delete props.dataKeys
    delete props.data
    delete props.actions
    delete props.filterBy
    delete props.onClick

    return(
      <div className="sortable-table-holder">
        <Table
          {...props}
          className={this.props.className ? this.props.className + " responsive-table sortable-table" : "responsive-table sortable-table"}
        >
        <Thead>
          {tableHeader}
        </Thead>
          {tableContent.length > 0 ? tableContent : <Tr><Td column={this.props.dataKeys[0].id} >No data with this parameters</Td></Tr>}
        </Table>
      </div>
    )
  }
}
