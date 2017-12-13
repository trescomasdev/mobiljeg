import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOptions, updateOption, changeOption, deleteOption, addNewOption} from '../../actions/optionActions';

import Option from '../../components/Options/Option/Option';
import AddNewOption from '../../components/Options/AddNewOption/AddNewOption';


class Options extends Component {

  componentWillMount(){
    this.props.getOptions()
  }

  render() {

    let options = this.props.options.map((data, key) => {
      return (
        <Option key={key} data={data} onChange={this.props.changeOption} onSave={this.props.updateOption.bind(null, data)} onRemove={this.props.deleteOption.bind(null, data)}/>
      );
    })

    return(
      <div id="options" className="section">

        <div className="container">

          <div className="row block-title-holder">
            <div className="col-md-12">
              <h1 className="block-title">Beállítások</h1>
            </div>
          </div>

          <div className="row">
            <AddNewOption addNewOption={this.props.addNewOption}/>
          </div>

          <div className="row">
            {options}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.options});

const mapDispatchToProps = dispatch => ({
  getOptions: () => {
    dispatch(getOptions());
  },
  updateOption: (e) => {
    dispatch(updateOption(e));
  },
  deleteOption: (e) => {
    dispatch(deleteOption(e));
  },
  changeOption: (e) => {
    dispatch(changeOption(e));
  },
  addNewOption: (e) => {
    dispatch(addNewOption(e));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
