import { FormState, FieldState } from 'formstate';

import { validate } from 'shared/utility';
// import { insuranceActions } from 'shared/actions';

export default class InquiryForm {

  static _instance;

  constructor() {
    InquiryForm._instance = this;
  }

  city = new FieldState('').validators((val) => validate('城市', val, 'required'));
  licenseNo = new FieldState('').validators((val) => validate('车牌号', val, 'required|licenseNumber'));
  name = new FieldState('').validators((val) => validate('姓名', val, 'required'));
  idCard = new FieldState('').validators((val) => validate('身份证', val, 'required|idCard'));
  productId = new FieldState('').validators((val) => validate('产品', val, 'required'));

  form = new FormState({
    basic: new FormState({
      city: this.city,
      licenseNo: this.licenseNo,
      name: this.name,
      idCard: this.idCard,
      productId: this.productId,
    })
  });

  toJson() {
    return {
      city: this.city.$,
      license_no: this.licenseNo.$,
      name: this.name.$,
      id_card: this.idCard.$,
      product_id: this.productId.$,
    }
  }

  handleBasic = async() => {
    const res = await this.form.$.basic.validate();
    if (res.hasError) return false;
    return true;
  }

};

