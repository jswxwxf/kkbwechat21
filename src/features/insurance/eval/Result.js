import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Page,
  Navbar,
  NavLeft,
  NavCenter,
  NavRight,
  Link,
  Progressbar,
  Toolbar,
  Button
} from 'framework7-react';

import './Result.scss';

export default class Result extends Component {

  static propTypes = {
    result: PropTypes.object,
    dialog: PropTypes.object
  }

  render() {
    const { dialog, result } = this.props;
    if (!result) return null;
    return (
      <Page id="insurance-eval-result">
        <Navbar>
          <NavLeft></NavLeft>
          <NavCenter>车辆商业险保费</NavCenter>
          <NavRight><Link text="关闭" onClick={() => dialog.hide()} /></NavRight>
        </Navbar>
        <h2 className="text-center">开开保为您节省</h2>
        <div id="save" className="text-center">
          <div>{result.pct_save}</div>
        </div>
        <div id="compare">
          <table>
            <tbody>
              <tr>
                <th>4s店</th>
                <td><Progressbar progress={100} color="gray" /></td>
                <td>{result.price_4s}</td>
              </tr>
              <tr>
                <th>电网销</th>
                <td><Progressbar progress={result.price_online / result.price_4s * 100} color="gray" /></td>
                <td>{result.price_online}</td>
              </tr>
              <tr>
                <th>开开保</th>
                <td><Progressbar progress={result.price_kkb / result.price_4s * 100} color="blue" /></td>
                <td>{result.price_kkb}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Toolbar className="lcb-toolbar-button">
          <Button big color="white" text="立刻精确报价" />
        </Toolbar>
      </Page>
    );
  }
}
