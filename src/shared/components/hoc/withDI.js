import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Reflux from 'reflux';
import axios from 'axios';
import _ from 'lodash';
import { Provider } from 'mobx-react';

import { appActions } from 'shared/actions';

import {
  AppStore,
  CommonStore,
  UserStore,
  CarStore,
  DeviceStore,
  InsuranceStore,
  InquiryStore,
} from 'shared/stores';

import {
  UtilService,
  StoreService,
  CommonService,
  UserService,
  CarService,
  DeviceService,
  InsuranceService,
  InquiryService,
} from 'shared/services';

const storeService = new StoreService();
const utilService = new UtilService(); utilService.storeService = storeService;
const commonService = new CommonService(); commonService.storeService = storeService;
const userService = new UserService(); userService.storeService = storeService;
const carService = new CarService(); carService.storeService = storeService; carService.userService = userService;
const deviceService = new DeviceService(); deviceService.storeService = storeService; deviceService.carService = carService;
const insuranceService = new InsuranceService(); insuranceService.storeService = storeService;
const inquiryService = new InquiryService(); inquiryService.storeService = storeService;

const appStore = Reflux.initStore(AppStore); appStore.utilService = utilService; appStore.userService = userService;
const commonStore = Reflux.initStore(CommonStore); commonStore.utilService = utilService; commonStore.commonService = commonService;
const userStore = Reflux.initStore(UserStore); userStore.utilService = utilService; userStore.userService = userService;
const carStore = Reflux.initStore(CarStore); carStore.utilService = utilService; carStore.carService = carService;
const deviceStore = Reflux.initStore(DeviceStore); deviceStore.utilService = utilService; deviceStore.deviceService = deviceService;
const insuranceStore = Reflux.initStore(InsuranceStore); insuranceStore.utilService = utilService; insuranceStore.insuranceService = insuranceService;
const inquiryStore = Reflux.initStore(InquiryStore); inquiryStore.utilService = utilService; inquiryStore.inquiryService = inquiryService;

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  utilService.hideSpinner();
  appActions.resultSucceed(response.data);
  return response;
}, function (error) {

  // Do something with response error
  utilService.hideSpinner();

  const { response: resp } = error;

  if (error.message === 'Network Error' || _.startsWith(resp.data, "Proxy error")) {
    appActions.networkError();
    return Promise.reject(error);
  }

  if (resp.data && resp.data.code === 401) {
    appActions.tokenExpired(resp.data);
    handleError(resp, 'config.tokenHandler');
    return Promise.reject(error);
  }

  var handled = handleError(resp, 'config.errorHandler');
  if (handled) return Promise.reject(error);

  if (resp.config && resp.config.errorHandled) return Promise.reject(error);
  appActions.resultFailed(resp.data || {});
  return Promise.reject(error);

});

function handleError(resp, handlerConfig) {
  var errorHandler = _.get(resp, handlerConfig);
  if (errorHandler && _.isFunction(errorHandler)) {
    var handled = errorHandler(resp.data, resp);
    if (handled === true) return true;
  }
  return false;
}

const withDI = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Provider utilService={utilService} commonService={commonService}>
          <WrappedComponent {...this.props} />
        </Provider>
      )
    }
  }
}

export default withDI;