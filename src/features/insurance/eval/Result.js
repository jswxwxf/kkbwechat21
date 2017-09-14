import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UtilService } from 'shared/services';
import './Result.scss';

export default class Result extends Component {

  static propTypes = {
    result: PropTypes.object,
    dialog: PropTypes.object
  }

  utilService = UtilService._instance;

  componentDidMount() {
    console.log('showing progressbar');
    // this.utilService.f7App.showProgressbar('#insurance-eval-result');
    this.utilService.f7App.myApp.setProgressbar('.progressbar', 20);
  }

  render() {
    const { result } = this.props;
    if (!result) return null;
    return (
      <div className="page">
        <div className="page-content">
          <div className="navbar">
            <div className="navbar-inner">
              <div className="left"></div>
              <div className="center">车辆商业险保费</div>
              <div className="right close-popup">关闭</div>
            </div>
          </div>
          <h2 className="text-center">开开保为您节省</h2>
          <div id="save" className="text-center">
            <div>{result.pct_save}%</div>
          </div>
          <div id="compare">
            <table>
              <tbody>
                <tr>
                  <th>4s店</th>
                  <td>
                    <span className="progressbar bg-gray" data-progress={100}><span></span></span>
                  </td>
                  <td>{result.price_4s}</td>
                </tr>
                <tr>
                  <th>电网销</th>
                  <td>
                    <span className="progressbar bg-gray" data-progress={result.price_online / result.price_4s * 100}><span></span></span>
                  </td>
                  <td>{result.price_online}</td>
                </tr>
                <tr>
                  <th>开开保</th>
                  <td>
                    <span className="progressbar bg-blue" data-progress={result.price_kkb / result.price_4s * 100}><span></span></span>
                  </td>
                  <td>{result.price_kkb}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="toolbar lcb-toolbar-button">
          <div className="toolbar-inner">
            <a href="/order/inquiry/basic" className="button button-big color-white close-popup">立刻精确报价</a>
          </div>
        </div>
      </div>
    );
  }
}