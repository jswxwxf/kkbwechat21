import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
} from 'framework7-react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import { SelectField } from 'shared/components';
import { carActions } from 'shared/actions';
import { CarStore } from 'shared/stores';

import './CarSwitch.scss';

@observer
export default class CarSwitch extends Component {

  static propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    inner: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    title: '切换车辆',
    inner: true,
    type: 'button',
    onChange: _.noop
  }

  constructor(props, context) {
    super(props, context);
    carActions.getActiveCar();
    carActions.getCars();
  }

  handleChange = (car_id) => {
    carActions.setActiveCar(car_id);
    let dispose = CarStore.carState._activeCar.observe(change => {
      carActions.getActiveCar();
      this.props.onChange(car_id);
      dispose();
    });
  }

  render() {
    let { title, type, inner } = this.props;
    let { activeCar, cars } = CarStore.carState;
    let className = `lcb-car-switch lcb-car-switch-${type}`;
    let el = (<ListItem title={title} />);
    if (activeCar && cars) {
      el = (
        <SelectField label={title} state={{ value: activeCar.car_id, onChange: this.handleChange }}>
          <select>
            {cars && cars.map(car =>
              <option key={car.car_id} value={car.car_id}>{car.license_no || '缺少车牌号'}</option>
            )}
          </select>
        </SelectField>
      );
    }
    if (inner) {
      return <List className={className}>{el}</List>
    }
    return el;
  }

}
