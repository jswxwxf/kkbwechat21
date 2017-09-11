import { FormState, FieldState } from 'formstate';

import { validate } from 'shared/utility';
import { userActions } from 'shared/actions';

export default class ForgetForm {

  mobile = new FieldState('').validators((val) => validate('注册手机', val, 'required|mobile'));
  code = new FieldState('').validators((val) => validate('验证码', val, 'required|verifyCode'));
  password = new FieldState('').validators((val) => validate('密码', val, 'required|password'));

  form = new FormState({
    mobile: this.mobile,
    code: this.code,
    password: this.password
  });

  toJson() {
    return {
      mobile: this.mobile.$,
      code: this.code.$,
      password: this.password.$
    }
  }

  async sendCode(e, countDown) {
    const res = await this.mobile.validate();
    if (res.hasError) return;
    countDown.startCountDown();
    userActions.sendCode('reset', this.mobile.$);
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return;
    userActions.resetPassword(this.toJson());
  };

};