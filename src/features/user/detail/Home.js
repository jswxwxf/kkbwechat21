import React, { Component } from 'react';
import {
  List,
  ContentBlock,
  Button
} from 'framework7-react';
import { when } from 'mobx';
import { observer } from 'mobx-react';

import { SelectField, PickerField } from 'shared/components';
import { UserStore } from 'shared/stores';

import HomeForm from './HomeForm';
import './Home.scss';

@observer
export default class Home extends Component {

  state = {
    form: null
  }

  componentDidMount() {
    when(
      () => UserStore.userState.detail != null,
      () => this.setState({ form: new HomeForm() })
    );
  }

  render() {
    let { form } = this.state;
    if (!form) return null;
    return (
      <span id="user-detail-home">
        <List form>
          <SelectField label="婚姻状况" state={form.marriageStatus}>
            <select>
              <option value="">请选择</option>
              <option value="未婚">未婚</option>
              <option value="已婚">已婚</option>
              <option value="离异">离异</option>
              <option value="丧偶">丧偶</option>
            </select>
          </SelectField>
          <PickerField label="子女状况" placeholder="请选择">
            <select textAlign="center" state={form.childrenBoys}>
              <option value="">请选择</option>
              <option value="1男">1男</option>
              <option value="2男">2男</option>
            </select>
            <select textAlign="center" state={form.childrenGirls}>
              <option value="">请选择</option>
              <option value="1女">1女</option>
              <option value="2女">2女</option>
            </select>
          </PickerField>
        </List>
        <ContentBlock>
          <Button fill big text="提交" onClick={form.handleSubmit} />
        </ContentBlock>
      </span>
    );
  }
}
;