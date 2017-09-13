import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GridRow,
  GridCol
} from 'framework7-react';
import _ from 'lodash';

import './CompanyField.scss';

export default class CompanyField extends Component {

  static propTypes = {
    companies: PropTypes.array,
    multiple: PropTypes.bool,
    onDone: PropTypes.func
  }

  static defaultProps = {
    companies: [],
    target: 'li',
    multiple: false,
    onDone: _.noop
  };

  render() {
    const { companies } = this.props;
    const l = companies.length > 3 ? (3 - companies.length / 3) : 0;
    let fillups = [];
    for (let i = 0; i < l; i++) fillups.push(<GridCol key={i} width="33"></GridCol>);
    return (
      <span className="lcb-company-field">
        <GridRow noGutter>
          {companies.map((company, i) => (
            <GridCol key={company.company_id} width="33" className={`lcb-company-logo lcb-company-logo-${company.company_id}`}>
              <img src={`${require('assets/images/ico_p_on2x.png')}`} alt="" className="lcb-company-selector lcb-invisible" />
              {i === 0 && <img src={`${require('assets/images/flag_recommend.png')}`} alt="recommand" className="lcb-company-recommend" />}
            </GridCol>
          ))}
          {fillups}
        </GridRow>
      </span>
    );
  }

}
