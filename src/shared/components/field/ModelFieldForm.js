import { FormState, FieldState } from 'formstate';

export default class EditForm {

  constructor(car) {

    this.brandId = new FieldState(car.brand_id);
    this.seriesId = new FieldState(car.series_id);
    this.modelId = new FieldState(car.model_id);

    this.car = car;

    this.form = new FormState({
      brandId: this.brandId,
      // carBrand: car.car_brand,
      seriesId: this.seriesId,
      // carSeries: car.car_series,
      modelId: this.modelId,
      // carModel: car.car_model
    });

  }

};

