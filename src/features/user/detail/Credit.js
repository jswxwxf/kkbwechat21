import React, { Component } from 'react';
import {
  GridRow,
  GridCol,
  Card,
  CardContent,
  CardFooter
} from 'framework7-react';
import { observer } from 'mobx-react';

import { ImageField } from 'shared/components';
import { userActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

import './Credit.scss';

@observer
export default class Credit extends Component {

  handleCredit = (credit) => {
    userActions.updateDetail({ credit: credit.data });
  }

  render() {
    let { detail } = UserStore.userState;
    return (
      <span id="user-detail-credit">
        <GridRow noGutter>
          <GridCol>
            <Card>
              <CardContent>
                <img src={detail ? detail.credit : require('assets/images/picture_upload2.png')} alt="驾照示意图" className="lcb-img-responsive" />
                <ImageField target=".card-content-inner" onDone={this.handleCredit} />
              </CardContent>
              <CardFooter>芝麻信用上传</CardFooter>
            </Card>
          </GridCol>
          <GridCol>
            <Card>
              <CardContent><img src={require('assets/images/sample_credit.png')} alt="驾照示意图" className="lcb-img-responsive" /></CardContent>
              <CardFooter>芝麻信用示意图</CardFooter>
            </Card>
          </GridCol>
        </GridRow>
      </span>
    );
  }
}