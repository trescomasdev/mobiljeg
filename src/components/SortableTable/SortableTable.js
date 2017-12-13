import React, { Component } from 'react';
import { Table, Thead, Tr, Td, Th} from 'reactable';
import LabeledInput from '../LabeledInput/LabeledInput';

import './SortableTable.css'

export default class Orders extends Component {
  constructor(props){
    super(props)

    this.state = {filterBy: ""};

    this.filter = this.filter.bind(this)
  }

  filter(e){
    this.setState({filterBy: e.target.value})
  }

  render(){
    let tableHeader = this.props.dataKeys.map((data, key) => {
      return(
        <Th key={key} column={data.id}>{data.label}</Th>
      );
    })

    if (this.props.actions && this.props.actions.length > 0)
      tableHeader.push(
        <Th key={this.props.dataKeys.length + 1} column="actions">Műveletek</Th>
      )

    let tableContent = this.props.data.length > 0 ? this.props.data.map((row, key) => {

      let rowData = this.props.dataKeys.map((data, key) => {
        let val = row[data.id]

        if (data.pattern)
          val = data.pattern(val, row);

          return(
            <Td key={key} data-label={data.label} column={data.id} className={row[data.id]}>{val}</Td>
          );
      })

      if (this.props.actions && this.props.actions.length > 0){
        let actions = this.props.actions.map((d, key) => {
          return <span key={key} onClick={() => d.clickAction(row)}>{d.action}</span>
        })

        rowData.push(
          <Td key={this.props.dataKeys.length + 1} column="actions"><div className="action-buttons">{actions}</div></Td>
        )
      }

      return(
        <Tr key={key} onClick={this.props.onClick !== undefined ? () => this.props.onClick(row._id) : undefined}>
          {rowData}
        </Tr>
      );
    }) : []

    let props = {...this.props};
    delete props.dataKeys
    delete props.data
    delete props.actions
    delete props.filterBy
    delete props.onClick

    return(
      <div className="sortable-table-holder">
        <div className="sortable-table-filter">
          <LabeledInput type="text" value={this.state.filterBy} placeholder="Keresés" onChange={this.filter}/>
        </div>
        <Table
          {...props}
          className={this.props.className ? this.props.className + " responsive-table sortable-table" : "responsive-table sortable-table"}
          filterBy={this.state.filterBy ? this.state.filterBy : ""}
        >
        <Thead>
          {tableHeader}
        </Thead>
          {tableContent.length > 0 ? tableContent : <Tr><Td column={this.props.dataKeys[0].id} >No data with this parameters</Td></Tr>}
        </Table>
      </div>
    );
  }
}
