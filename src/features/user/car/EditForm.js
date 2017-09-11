import { FormState, FieldState } from 'formstate';

import { ModelFieldForm } from 'shared/components';
import { validate } from 'shared/utility';
import { carActions } from 'shared/actions';

export default class EditForm {

  constructor(car, isEditing) {

    this.licenseNo = new FieldState(car.license_no).validators((val) => validate('车牌号', val, 'required|licenseNumber'));
    this.modelForm = new ModelFieldForm(car);
    this.oilType = new FieldState(car.oil_type);
    this.carVin = new FieldState(car.car_vin);
    this.engineNo = new FieldState(car.engine_no);

    this.isEditing = isEditing;
    this.car = car;

    this.form = new FormState({
      licenseNo: this.licenseNo,
      carModel: this.modelForm.form,
      oilType: this.oilType,
      carVin: this.carVin,
      engineNo: this.engineNo,
    });

  }

  toJson() {
    return {
      license_no: this.licenseNo.$,
      brand_id: this.modelForm.brandId.$,
      series_id: this.modelForm.seriesId.$,
      model_id: this.modelForm.modelId.$,
      oil_type: this.oilType.$,
      car_vin: this.carVin.$,
      engine_no: this.engineNo.$
    }
  }

  handleSubmit = async () => {
    const res = await this.form.validate();
    if (res.hasError) return;
    let car = this.toJson();
    if (this.isEditing) {
      car.car_id = this.car.car_id;
      carActions.updateCar(car);
    } else {
      carActions.addCar(car);
    }
  };

};

