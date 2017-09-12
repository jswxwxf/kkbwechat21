import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  FormLabel,
  FormInput
} from 'framework7-react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

import './PickerField.scss';

@inject('utilService')
@observer
export default class PickerField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    state: PropTypes.object,
  }

  static defaultProps = {
    state: {}
  }

  utilService = this.props.utilService;
  input;
  picker;
  cols;
  states;
  values;

  constructor(props, context) {
    super(props, context);
    this.state = {
      placeholder: this.props.placeholder
    }
    this._initCols();
  }

  _initCols() {
    let cols = [];
    let states = [];
    let values = [];
    React.Children.forEach(this.props.children, (select) => {
      let { children: options, state = {}, ...otherProps } = select.props;
      states.push(state);
      values.push(state.value);
      cols.push({
        ...otherProps,
        values: React.Children.map(options, (option) => option.props.value),
        displayValues: React.Children.map(options, (option) => option.props.children)
      })
    });
    let compactValues = _.compact(values);
    if (!_.isEmpty(compactValues)) {
      // eslint-disable-next-line 
      this.state.placeholder = compactValues.join(' ');
      this.values = values;
    }
    this.states = states;
    this.cols = cols;
  }

  handleClick = (e) => {
    this.input = e.target;
    this._showPicker(this.input);
  }

  _showPicker(input) {
    this._getPicker(input).open();
  }

  _getPicker(input) {
    if (this.picker) return this.picker;
    this.picker = this.utilService.f7App.picker({
      input,
      toolbarCloseText: '关闭',
      cols: this.cols,
      value: this.values,
      onChange: (p, values, displayValues) => {
        _.forEach(values, (val, i) => {
          this.states[i].onChange(val)
        });
      },
      onClose: (p) => {
        if (_.isEmpty(_.compact(p.value))) {
          this.input.value = this.props.placeholder;
        }
      },
      onOpen: (p) => {
        if (_.isEmpty(_.compact(p.value))) {
          this.input.value = "";
        }
      }
    });
    return this.picker;
  }

  render() {
    const { label } = this.props;
    const { placeholder } = this.state;
    return (
      <span className="lcb-picker-field">
        <ListItem link="#">
          <FormLabel>{label}</FormLabel>
          <FormInput type="text" placeholder={placeholder}
            onClick={this.handleClick} />
        </ListItem>
        {this.states[0].hasError &&
          <ListItem title={this.states[0].error} divider />}
      </span>
    );
  }

}
