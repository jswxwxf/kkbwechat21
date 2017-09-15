import React, { Component } from 'react';
import {
  Framework7App,
  Statusbar,
} from 'framework7-react';
import { inject } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

import { withDI, Toast } from 'shared/components';
import { userActions } from 'shared/actions';

import { routes as welcomeRoutes, Menu, MainViews, Dialogs } from './features/welcome';
import { routes as insuranceRoutes } from './features/insurance';
import { routes as orderRoutes } from './features/order';
import { routes as userRoutes } from './features/user';

import './App.css';

const routes = [
  ...welcomeRoutes,
  ...insuranceRoutes,
  ...orderRoutes,
  ...userRoutes
]

@inject('utilService')
class App extends Component {

  utilService = this.props.utilService;

  componentDidMount() {
    userActions.checkLogin();
    window.addEventListener('offline', () => {
      this.utilService.showSpinner('您的手机目前没有网络');
    });
    window.addEventListener('online', () => {
      this.utilService.hideSpinner();
    });
  }

  handlePageAfterAnimation = (app, page) => {
    app.sizeNavbars('.view-main')
  }

  handleRouteChange = (route) => {
    this.utilService.hideSpinner();
    this.utilService.dialogs.hideAll();
    this.utilService.rememberState(route);
  }
  render() {
    return (
      <Framework7App
        routes={routes}
        themeType="ios"
        pushState={true}
        panelLeftBreakpoint={640}
        pushStateSeparator="#"
        cache={false}
        swipeBackPage={false}
        onPageAfterAnimation={this.handlePageAfterAnimation}
        onRouteChange={this.handleRouteChange}>
        <Statusbar />
        <Menu />
        <MainViews />
        <Toast />
        <Dialogs />
        {/* <DevTools /> */}
      </Framework7App>
    );
  }
}

export default withDI(App);
