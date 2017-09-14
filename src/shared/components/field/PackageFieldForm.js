import { FormState, FieldState } from 'formstate';
import _ from 'lodash';

export default class PackageFieldForm {

  constructor(pkg) {

    this.destroy = new FieldState(_.defaultTo(pkg.destroy, 'false'));
    this.liability = new FieldState(_.defaultTo(pkg.liability, '0'));
    this.stolen = new FieldState(_.defaultTo(pkg.stolen, 'false'));
    this.passenger_seat = new FieldState(_.defaultTo(pkg.passenger_seat, '0'));
    this.driver_seat = new FieldState(_.defaultTo(pkg.destroy, '0'));
    this.scratch = new FieldState(_.defaultTo(pkg.scratch, '0'));
    this.glasses = new FieldState(_.defaultTo(pkg.glasses, '0'));
    this.water = new FieldState(_.defaultTo(pkg.water, 'false'));
    this.burn = new FieldState(_.defaultTo(pkg.burn, 'false'));
    this.lights = new FieldState(_.defaultTo(pkg.lights, '0'));
    this.escape = new FieldState(_.defaultTo(pkg.escape, 'false'));
    this.excluding = new FieldState(_.defaultTo(pkg.excluding, 'false'));

    this.form = new FormState({
      destroy: this.destroy,
      liability: this.liability,
      stolen: this.stolen,
      passenger_seat: this.passenger_seat,
      driver_seat: this.driver_seat,
      scratch: this.scratch,
      glasses: this.glasses,
      water: this.water,
      burn: this.burn,
      lights: this.lights,
      escape: this.escape,
      excluding: this.excluding
    }).validators(($) => {
      if (!this.isValid($)) return '请选择险种组合';
      // if (!this.isValid($)) {
      //   UtilService._instance.toast('请选择险种组合');
      //   return '';
      // }
    });

    _.forEach(this.form.$, (field, k) => {
      field.$mobx.observe(change => {
        if (change.type === 'update' && change.name === 'value') {
          console.log('validating form');
          this.form.validate();
        }
      });
    })

  }

  isValid($) {
    /* eslint-disable */
    return !(
      $.destroy.$ == 'false' &&
      $.liability.$ == '0' &&
      $.stolen.$ == 'false' &&
      $.passenger_seat.$ == '0' &&
      $.driver_seat.$ == '0' &&
      $.scratch.$ == '0' &&
      $.glasses.$ == '0' &&
      $.water.$ == 'false' &&
      $.burn.$ == 'false' &&
      $.lights.$ == '0' &&
      $.excluding.$ == 'false' &&
      $.escape.$ == 'false'
    );
    /* eslint-enable */
  }

};

