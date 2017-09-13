import React from 'react';
import ReactDOM from 'react-dom';

// vendors
import 'framework7-react';
import 'lodash';
import 'reflux';
import 'mobx';
import 'mobx-react';
import 'axios';
import 'formstate';
import 'moment';
import 'store';
import 'validatorjs';
import 'classnames';
import $ from 'jquery';

// styles
import 'framework7/dist/css/framework7.ios.css';
import 'framework7/dist/css/framework7.material.colors.css'
import 'framework7/dist/css/framework7.ios.colors.css'
import './styles/global.scss'
import './index.css';

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

window.jQuery = $;

Promise.all([
  import('./App'),
]).then((modules) => {
  let App = modules[0].default;
  setTimeout(() => ReactDOM.render(<App />, document.getElementById('root')), 100);
});

