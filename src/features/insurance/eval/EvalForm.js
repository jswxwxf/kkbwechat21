import { FormState, FieldState } from 'formstate';

import { validate } from 'shared/utility';
import { insuranceActions } from 'shared/actions';

export default class EvalForm {

  city = new FieldState('').validators((val) => validate('城市', val, 'required'));
  carAge = new FieldState('').validators((val) => validate('车龄', val, 'required'));
  carPrice = new FieldState('').validators((val) => validate('购置价', val, 'required'));
  claims = new FieldState('').validators((val) => validate('理赔次数', val, 'required'));
  
  form = new FormState({
    city: this.city,
    carAge: this.carAge,
    carPrice: this.carPrice,
    claims: this.claims,
  });

  toJson() {
    return {
      city: this.city.$,
      car_age: this.carAge.$,
      car_price: this.carPrice.$,
      claims: this.claims.$,
    }
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return false;
    insuranceActions.quickEval(this.toJson());
    return true;
  };

};

