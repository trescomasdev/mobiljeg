import React, { Component } from 'react';

import './LabeledInput.css'

export default class LabeledInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      focused: false
    }

    this.onChange = this.onChange.bind(this)
  }

  setClass(props){
    let cssClass = "";

    if (props.value !== "" && props.value !== undefined)
      cssClass += "populated ";

    if (props.invertColor === true)
      cssClass += "invertColor ";

    if (this.state.focused === true && this.props.error && !this.props.error[props.name]){
      cssClass += "valid ";
    }

    if (this.props.error && this.props.error[props.name]){
      cssClass += "invalid ";
    }

    return cssClass;
  }

  onChange(e){
    this.setState({focused: true})
    this.props.onChange(e)
  }

  render() {
    return(
      <div className="labeled-input">
        <label className={this.setClass(this.props)}>
          <input
            className={this.props.className}
            type={this.props.type ? this.props.type : "text"}
            value={this.props.value ? this.props.value : ""}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.onChange}
            disabled={this.props.disabled}
            min={this.props.min}
            max={this.props.max}
            pattern={this.props.pattern}
          />
          <span>{this.props.placeholder}</span>
        </label>
        {this.props.error && this.props.error[this.props.name]
          ?
            <span className="error">{this.props.error[this.props.name]}</span>
          :
            <span></span>
        }
      </div>
    );
  }
}
