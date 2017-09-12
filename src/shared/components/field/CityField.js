import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  FormLabel,
  FormInput
} from 'framework7-react';
import { when } from 'mobx';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

import { commonActions } from 'shared/actions';
import { CommonStore } from 'shared/stores';

import './CityField.scss';

const mapper = c => ({ text: c.name_cn, value: c.code, parent: c.parent_code });

@inject('utilService')
@observer
export default class CityField extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    state: PropTypes.object,
    onClose: PropTypes.func
  }

  static defaultProps = {
    state: {},
    onClose: _.noop
  }

  utilService = this.props.utilService;
  input;
  picker;
  cols;
  values;
  displayValues;
  oldValue;
  initialized = false;

  constructor(props, context) {
    super(props, context);
    this.state = {
      placeholder: this.props.placeholder
    }
    this.oldValue = this.props.state.value;
    this.cols = [{}, {}];
    commonActions.getRegions();
  }

  componentDidMount() {
    when(
      () => CommonStore.commonState.regions != null,
      () => this.renderRegions()
    );
  }

  renderRegions() {
    const { regions } = CommonStore.commonState;
    // eslint-disable-next-line
    const provinces = regions.filter(p => p.parent_code == 0).map(mapper);
    this.cols[0] = {
      values: provinces.map(r => r.value),
      displayValues: provinces.map(r => r.text),
      onChange: this.handleRegionChange,
      textAlign: 'right',
      width: '50%'
    };
    if (!this.initialized && this.props.state.value) {
      /* eslint-disable */
      const city = regions.find(r => r.code == this.props.state.value);
      const province = regions.find(r => r.code == city.parent_code);
      /* eslint-enable */
      if (city) {
        this.values = [city.parent_code];
        this.displayValues = [province.name_cn, city.name_cn];
      }
    }
    this.handleRegionChange(this.picker, provinces[0].value, provinces[0].text);
  }

  handleRegionChange = (picker, value, displayValue) => {
    this.renderCities(picker, value);
  }

  renderCities(picker, p_code) {
    const regions = CommonStore.commonState.regions;
    // eslint-disable-next-line
    const cities = regions.filter(p => p.parent_code == p_code).map(mapper);
    if (!picker) {
      this.cols[1] = ({
        values: cities.map(r => r.value),
        displayValues: cities.map(r => r.text),
        textAlign: 'left',
        width: '50%'
      });
      if (!this.initialized && this.props.state.value) {
        this.values[1] = this.props.state.value;
        this.setState({ value: this.displayValues.join(' - ') });
      }
      this.initialized = true;
      return;
    }
    if (picker.cols[1].replaceValues) {
      picker.cols[1].replaceValues(
        cities.map(r => r.value),
        cities.map(r => r.text)
      );
    }
  }

  handleClick = (e) => {
    if (!this.initialized) return;
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
      // closeByOutsideClick: false,
      cols: this.cols,
      value: this.values,
      formatValue: (picker, values, displayValues) => displayValues.join(' - '),
      onChange: (picker, values, displayValues) => this.props.state.onChange(values[1]),
      onClose: (picker) => {
        this.props.onClose(this.props.state.value, this.oldValue, picker);
        this.oldValue = this.props.state.value;
      },
    });
    return this.picker;
  }

  render() {
    const { label, state } = this.props;
    const { placeholder, value } = this.state;
    return (
      <span className="lcb-city-field">
        <ListItem
          link="#">
          <FormLabel>{label}</FormLabel>
          <FormInput type="text" placeholder={placeholder} value={value}
            onClick={this.handleClick} />
        </ListItem>
        {state.hasError &&
          <ListItem title={state.error} divider />}
      </span>
    );
  }

}
