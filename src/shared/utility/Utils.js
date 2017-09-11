import _ from 'lodash';
import moment from 'moment';

/* eslint-disable */
export default class Utils {

  static toBool(val, defVal = false) {
    if (_.isUndefined(val)) return defVal;
    if (val == 'true') return true;
    if (val == 1) return true;
    return false;
  }

  static parseInt(val) {
    return parseInt(val, 10);
  }

  static parseFloat(val) {
    var res = parseFloat(val);
    if (_.isNaN(res)) return val;
    return res;
  }

  static isEmpty(val) {
    if (_.isNumber(val) && val != 0) return false;
    if (val === '0') return true;
    return _.isEmpty(val);
  }

  static in(collection, value) {
    return _.includes(collection, value);
  }

  static first(obj) {
    if (_.isArray(obj)) return _.first(obj);
    return obj;
  }

  static toLower(str) {
    if (!_.isString(str)) return str;
    return str.toLowerCase();
  }

  static toArray(obj) {
    if (_.isArray(obj)) return obj;
    return [obj];
  }

  static toDate(str) {
    if (!str) return str;
    return moment(str).toDate();
  }

  static formatDate(dt, format = 'YYYY-MM-DD') {
    if (!dt) return dt;
    return moment(dt).format(format);
  }

  static formatTime(dt) {
    if (!dt) return dt;
    return moment(dt).format('HH:mm:ss');
  }

  static formatPeriod(from, to) {
    if (!from) return '';
    if (!to) return '';
    return `${from} 至 ${to}`;
  }

  static applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  }

  /**
   * Convert number of seconds into time object
   *
   * @param integer secs Number of seconds to convert
   * @return object
   */
  static secondsToTime(secs) {

    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    return {
      "h": hours,
      "m": minutes,
      "s": seconds
    };

  }

  static formatDuration(duration, opt = { h: true, m: true, s: true }) {
    var formatted = '';
    duration = Utils.secondsToTime(duration);
    if (opt.h && duration.h > 0) formatted += `${duration.h}小时`;
    if (opt.m && duration.m > 0) formatted += `${duration.m}分`;
    if (opt.s && duration.s > 0) formatted += `${duration.s}秒`;
    return formatted;
  }
  
}