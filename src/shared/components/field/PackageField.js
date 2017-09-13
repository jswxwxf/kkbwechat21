import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem
} from 'framework7-react';
import { observer } from 'mobx-react';

import SelectField from './SelectField';
import PackageFieldForm from './PackageFieldForm';
import './PackageField.scss';

@observer
export default class PackageField extends Component {

  static propTypes = {
    state: PropTypes.object
  }

  static defaultProps = {
    state: new PackageFieldForm({}).form
  }

  render() {
    const form = this.props.state;
    return (
      <span className="lcb-package-field">
        {this.props.state.hasError &&
          <ListItem title={this.props.state.error} divider />}
        <SelectField label="车辆损失险" state={form.$.destroy}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
        <SelectField label="第三者责任险" state={form.$.liability}>
          <select>
            <option value="0">不投保</option>
            <option value="100000">10万元</option>
            <option value="150000">15万元</option>
            <option value="200000">20万元</option>
            <option value="300000">30万元</option>
            <option value="500000">50万元</option>
            <option value="1000000">100万元</option>
            <option value="2000000">200万元</option>
          </select>
        </SelectField>
        <SelectField label="全车盗抢险" state={form.$.stolen}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
        <SelectField label="乘客座位险" state={form.$.passenger_seat}>
          <select>
            <option value="0">不投保</option>
            <option value="10000">1万元</option>
            <option value="20000">2万元</option>
            <option value="30000">3万元</option>
            <option value="40000">4万元</option>
            <option value="50000">5万元</option>
            <option value="500000">50万元</option>
          </select>
        </SelectField>
        <SelectField label="司机座位险" state={form.$.driver_seat}>
          <select>
            <option value="0">不投保</option>
            <option value="10000">1万元</option>
            <option value="20000">2万元</option>
            <option value="30000">3万元</option>
            <option value="40000">4万元</option>
            <option value="50000">5万元</option>
            <option value="500000">50万元</option>
          </select>
        </SelectField>
        <SelectField label="划痕险" state={form.$.scratch}>
          <select>
            <option value="0">不投保</option>
            <option value="2000">2000元</option>
            <option value="5000">5000元</option>
            <option value="20000">20000元</option>
            <option value="50000">50000元</option>
          </select>
        </SelectField>
        <SelectField label="玻璃破损险" state={form.$.glasses}>
          <select>
            <option value="0">不投保</option>
            <option value="国产玻璃">国产玻璃</option>
            <option value="进口玻璃">进口玻璃</option>
          </select>
        </SelectField>
        <SelectField label="涉水险" state={form.$.water}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
        <SelectField label="自燃险" state={form.$.burn}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
        <SelectField label="后视镜和车灯" state={form.$.lights}>
          <select>
            <option value="0">不投保</option>
            <option value="国产">国产</option>
            <option value="进口">进口</option>
          </select>
        </SelectField>
        <SelectField label="找不到第三方" state={form.$.escape}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
        <SelectField label="不计免赔" state={form.$.excluding}>
          <select>
            <option value="false">不投保</option>
            <option value="true">投保</option>
          </select>
        </SelectField>
      </span>
    );
  }
}
