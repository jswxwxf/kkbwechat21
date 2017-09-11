import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Views,
  View,
  Pages,
  Page
} from 'framework7-react';
import { inject } from 'mobx-react';

// import Header from './Header';
// import Welcome from './Welcome';

@inject('utilService')
export default class MainViews extends Component {

  static contextTypes = {
    framework7AppContext: PropTypes.object
  };

  theme = this.context.framework7AppContext.theme;

  utilService = this.props.utilService;

  componentDidMount() {
    this.utilService.f7Context = this.context.framework7AppContext;
    this.context.framework7AppContext.getFramework7(f7App => {
      this.utilService.f7App = f7App;
    });
  }

  render() {
    return (
      <Views>
        <View id="main-view" navbarFixed main>
          <Pages>
            <Page />
          </Pages>
        </View>
      </Views>
    );
  }
}
