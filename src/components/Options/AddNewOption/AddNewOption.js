import React, { Component } from 'react';

import LabeledInput from '../../LabeledInput/LabeledInput';

import './AddNewOption.css';

export default class AddNewOption extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: ""
    }

    this.onChange = this.onChange.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  onChange(e){
    this.setState({value: e.target.value});
  }

  addNew(e){
    this.setState({value: ""});
    this.props.addNewOption(this.state);
  }

  render() {

    return(
      <div className="add-new-option-wrapper">
        <LabeledInput placeholder="Add new option" value={this.state.value} onChange={this.onChange}/>
        <button className="btn btn-alt" onClick={this.addNew}>Add</button>
      </div>
    );
  }
}
