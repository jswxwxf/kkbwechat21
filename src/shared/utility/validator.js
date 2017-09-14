import Validator from 'validatorjs';
Validator.useLang('zh');

const ID_CARD_REGEXP_15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
const ID_CARD_REGEXP_18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[X0-9]{1}$/i;
const MOBILE_REGEXP = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
const LICENSE_NUMBER_REGEXP = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[-]?[A-Z_0-9]{5}$/i;
const VERIFY_CODE_REGEXP = /^[0-9]{6}$/;
const USERNAME_REGEXP = /^[A-Z][A-Z0-9]{3,19}$/i;
const PASSWORD_REGEXP = /^[A-Z0-9]{6,20}$/i;
const NAME_REGEXP = /^[\u4e00-\u9fa5]{2,20}/;
const POSTAL_REGEXP = /^\d{6}$/;

Validator.register('requiredNumber', function (value, requirement /* defaults to null */, attribute) {
  return value > 0;
}, '请输入正确的:attribute.');

Validator.register('mobile', function (value, requirement /* defaults to null */, attribute) {
  return Validators.isMobile(value);
}, ':attribute是9位数字.');

Validator.register('password', function (value, requirement, attribute) {
  return Validators.isPassword(value);
}, ':attribute格式不正确.');

Validator.register('verifyCode', function (value, requirement, attribute) {
  return Validators.isVerifyCode(value);
}, ':attribute是6位数字.');

Validator.register('licenseNumber', function (value, requirement, attribute) {
  return Validators.isLicenseNumber(value);
}, '请输入正确格式的:attribute，如：沪A98981.');

Validator.register('idCard', function (value, requirement, attribute) {
  return Validators.isIdCard(value);
}, '请输入正确格式的:attribute号.');


export class Validators {

  static isIdCard(id) {
    return (ID_CARD_REGEXP_15.test(id) || ID_CARD_REGEXP_18.test(id));
  }

  static isMobile(mobile) {
    return MOBILE_REGEXP.test(mobile);
  }

  static isLicenseNumber(license) {
    return LICENSE_NUMBER_REGEXP.test(license);
  }

  static isVerifyCode(code) {
    return VERIFY_CODE_REGEXP.test(code);
  }

  static isUsername(username) {
    return USERNAME_REGEXP.test(username);
  }

  static isPassword(passwd) {
    return PASSWORD_REGEXP.test(passwd);
  }

  static isName(name) {
    return NAME_REGEXP.test(name);
  }

  static isPostal(postal) {
    return POSTAL_REGEXP.test(postal);
  }
  
}

export default (label, value, rules, errMsg) => {
  const validation = new Validator({ [label]: value }, { [label]: rules }, errMsg);
  validation.passes();
  const error = validation.errors.first(label);
  return error === '' ? false : error;
};