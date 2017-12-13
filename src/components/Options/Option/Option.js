import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import LabeledInput from '../../LabeledInput/LabeledInput';

import './Option.css';

export default class Option extends Component {

  render() {

    return(
      <div className={this.props.data.edited ? "option edited" : "option"}>
        <LabeledInput name={this.props.data.key} placeholder={this.props.data.key} value={this.props.data.value} onChange={this.props.onChange}/>
        <div className="option-actions">
          <span onClick={this.props.onSave}><FontAwesome name='floppy-o' /></span>
          {this.props.data._id
          ?
            <span onClick={this.props.onRemove}><FontAwesome name='trash-o' /></span>
          :
            ""
          }
        </div>
      </div>
    );
  }
}
