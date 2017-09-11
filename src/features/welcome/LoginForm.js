import { FormState, FieldState } from 'formstate';

import { validate } from 'shared/utility';
import { userActions } from 'shared/actions';

export default class LoginForm {

  name = new FieldState('').validators((val) => validate('用户名或注册手机', val, 'required'));
  password = new FieldState('').validators((val) => validate('密码', val, 'required'));

  form = new FormState({
    name: this.name,
    password: this.password
  });

  toJson() {
    return {
      name: this.name.$,
      password: this.password.$
    }
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return;
    userActions.login(this.toJson());
  };

};