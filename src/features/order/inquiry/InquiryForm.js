import { FormState, FieldState } from 'formstate';
import _ from 'lodash';

import { PackageFieldForm } from 'shared/components';
import { validate, Utils } from 'shared/utility';
import { inquiryActions } from 'shared/actions';

export default class InquiryForm {

  static _instance;

  companies = [
    { company_id: "clpc", company: "中国人寿财险", discount: 20.24 },
    { company_id: "cpic", company: "太平洋保险", discount: 17.48 },
    { company_id: "pingan", company: "中国平安", discount: 17.48 },
    { company_id: "taiping", company: "中国太平", discount: 15.64 },
    { company_id: "picc", company: "中国人保财险", discount: 14.72 }
  ]

  constructor() {
    InquiryForm._instance = this;
  }

  city = new FieldState('').validators((val) => validate('城市', val, 'required'));
  licenseNo = new FieldState('').validators((val) => validate('车牌号', val, 'required|licenseNumber'));
  name = new FieldState('').validators((val) => validate('姓名', val, 'required'));
  idCard = new FieldState('').validators((val) => validate('身份证', val, 'required|idCard'));
  productId = new FieldState('').validators((val) => validate('产品', val, 'required'));
  companyId = new FieldState('').validators((val) => validate('保险公司', val, 'required'));

  basicForm = new FormState({
    city: this.city,
    licenseNo: this.licenseNo,
    name: this.name,
    idCard: this.idCard,
    productId: this.productId,
  });

  insuranceForm = new FormState({
    companyId: this.companyId,
    package: new PackageFieldForm({}).form
  });

  toJson() {
    let result = {
      city: this.city.$,
      license_no: this.licenseNo.$,
      name: this.name.$,
      id_card: this.idCard.$,
      product_id: this.productId.$,
      company_id: this.companyId.$
    };
    return _.omitBy(result, Utils.isEmpty);
  }

  handleBasic = async () => {
    const res = await this.basicForm.validate();
    if (res.hasError) return;
    inquiryActions.inquiryBasic(this.toJson());
  }

  handleMore = async () => {
    inquiryActions.inquiryMore(this.toJson());
  }

  handleInsurance = async () => {
    const res = await this.insuranceForm.validate();
    if (res.hasError) return false;
    return true;
  }

};

