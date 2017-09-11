import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardFooter
} from 'framework7-react';
import { observer } from 'mobx-react';

import { ImageField } from 'shared/components';
import { userActions } from 'shared/actions';
import { UserStore } from 'shared/stores';

import './Drive.scss';

@observer
export default class Drive extends Component {

  handleLicense = (license) => {
    userActions.updateDetail({ driving_license: license.data });
  }

  /* eslint-disable */
  render() {
    let { detail } = UserStore.userState;
    return (
      <span id="user-detail-drive">
        <Card>
          <CardContent>
            <img style={{ backgroundImage: `url(${detail ? detail.driving_license : require('assets/images/picture_upload.png')})` }} />
            <ImageField target=".card-content-inner" onDone={this.handleLicense} />
          </CardContent>
          <CardFooter>驾照上传</CardFooter>
        </Card>
        <Card>
          <CardContent><img src={require('assets/images/sample_drive.png')} alt="驾照示意图" className="lcb-img-responsive" /></CardContent>
          <CardFooter>驾照示意图</CardFooter>
        </Card>
      </span>
    );
  }
}
