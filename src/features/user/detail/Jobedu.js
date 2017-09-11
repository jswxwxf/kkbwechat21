import React, { Component } from 'react';
import {
  List,
  ListItem,
  ContentBlock,
  Button
} from 'framework7-react';
import { when } from 'mobx';
import { observer } from 'mobx-react';

import { InputField, SelectField } from 'shared/components';
import { UserStore } from 'shared/stores';

import JobeduForm from './JobeduForm';
import './Jobedu.scss';

@observer
export default class Jobedu extends Component {

  state = {
    form: null
  }

  componentDidMount() {
    when(
      () => UserStore.userState.detail != null,
      () => this.setState({ form: new JobeduForm() })
    );
  }

  render() {
    let { form } = this.state;
    if (!form) return null;
    return (
      <span id="user-detail-jobedu">
        <List form>
          <SelectField label="单位性质" state={form.companyType}>
            <select>
              <option value="">请选择</option>
              <option value="机关">机关</option>
              <option value="企业">企业</option>
              <option value="事业单位">事业单位</option>
            </select>
          </SelectField>
          <InputField label="单位名称" placeholder="请输入所在单位" state={form.companyName} />
          <InputField label="工作职责" placeholder="请输入工作职责" state={form.jobTitle} />
          <ListItem divider />
          <SelectField label="最高学历" state={form.degree}>
            <select>
              <option value="">请选择</option>
              <option value="小学">小学</option>
              <option value="初中">初中</option>
              <option value="高中">高中</option>
              <option value="大学">大学</option>
              <option value="硕士">硕士</option>
              <option value="小学">博士</option>
            </select>
          </SelectField>
          <InputField label="毕业学校" placeholder="请输入毕业学校" state={form.school} />
          <InputField label="毕业专业" placeholder="请输入毕业专业" state={form.majorIn} />
        </List>
        <ContentBlock>
          <Button fill big text="提交" onClick={form.handleSubmit} />
        </ContentBlock>
      </span>
    );
  }
}
