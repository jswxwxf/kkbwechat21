import React, { Component } from 'react';
import {
  Page,
  List,
  ListItem,
  Toolbar,
  Link
} from 'framework7-react';
import { inject, observer } from 'mobx-react';

import Header from 'features/welcome/Header';
import { CarSwitch } from 'shared/components';
import { Pipe as P } from 'shared/utility';
import { carActions } from 'shared/actions';
import { CarStore } from 'shared/stores';

import './Car.scss';

@inject('utilService')
@observer
export default class Car extends Component {

  utilService = this.props.utilService;

  componentDidMount() {
    carActions.getActiveCar();
  }

  render() {
    let { activeCar } = CarStore.carState;
    if (!activeCar) return <Page />;
    return (
      <Page id="user-car" fixedSlot={<Header title="车辆信息" rightSlot={<Link text="添加车辆" href="/user/car/new" />} />}>
        <List>
          <ListItem link={`/user/car/edit?car_id=${activeCar.car_id}`} title="车牌号" after={activeCar.license_no} />
          <ListItem title="品牌" after={activeCar.car_brand} />
          <ListItem title="车系" after={activeCar.car_series} />
          <ListItem title="车型" after={activeCar.car_model} />
          <ListItem title="车驾号" after={activeCar.car_vin} />
          <ListItem title="发动机号" after={activeCar.engine_no} />
          <ListItem title="油品" after={P(activeCar.oil_type).oilType().v} />
        </List>
        <Toolbar>
          <CarSwitch />
        </Toolbar>
      </Page>
    );
  }

}
