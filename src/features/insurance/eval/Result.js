import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Popup,
  Page,
  Navbar,
  NavLeft,
  NavCenter,
  NavRight,
  Toolbar,
  Button,
  Link,
  Progressbar
} from 'framework7-react';

import { UtilService } from 'shared/services';
import './Result.scss';

export default class Result extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    result: PropTypes.object
  }

  utilService = UtilService._instance;

  render() {
    const { result } = this.props;
    if (!result) return null;
    return (
      <Popup id={this.props.id}>
        <Page>
          <Navbar>
            <NavLeft></NavLeft>
            <NavCenter>车辆商业险保费</NavCenter>
            <NavRight><Link text="关闭" closePopup /></NavRight>
          </Navbar>
          <h2 className="text-center">开开保为您节省</h2>
          <div id="save" className="text-center">
            <div>{result.pct_save}%</div>
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
            <Button href="/order/inquiry/basic" big color="white" text="立刻精确报价" closePopup />
          </Toolbar>
        </Page>
      </Popup>
    );
  }
}