import React, { Component } from 'react';
import {
  Page,
  Navbar,
  List,
} from 'framework7-react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import { SwitchField } from 'shared/components';
import { carActions } from 'shared/actions';
import { CarStore } from 'shared/stores';

import './Safety.scss';

@observer
export default class Safety extends Component {

  constructor(props, context) {
    super(props, context);
    carActions.getSafety();
  }

  @action
  handleChange = (change) => {
    let { safety } = CarStore.carState;
    safety[change.name] = change.value;
    carActions.updateSafety(safety.car_id, safety);
  }

  render() {
    let { safety } = CarStore.carState;
    if (!safety) return <Page />;
    return (
      <Page id="user-car-safety">
        <Navbar title="安防设置" backLink="返回" />
        <span>
          <List form>
            <SwitchField label="点火提醒" name="ignite" className="text-right" state={{ value: safety.ignite, onChange: this.handleChange }} />
            <SwitchField label="震动提醒" name="shake" className="text-right" state={{ value: safety.shake, onChange: this.handleChange }} />
            <SwitchField label="电压预警" name="volt" className="text-right" state={{ value: safety.volt, onChange: this.handleChange }} />
            <SwitchField label="油量预警" name="oil" className="text-right" state={{ value: safety.oil, onChange: this.handleChange }} />
            <SwitchField label="碰撞报警" name="crash" className="text-right" state={{ value: safety.crash, onChange: this.handleChange }} />
          </List>
        </span>
      </Page >
    );
  }

}
