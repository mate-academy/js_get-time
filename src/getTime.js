'use strict';

/**
 * Implement getTime function:
 *
 * Function takes string and returns first valid time in this string. Valid time
 * has format 'hh:mm'. Both hours and minutes have 2 digits, e.g. '09:00'. Hours
 * is at most 23 and minutes is at most 59. '37:98' is not valid time. If
 * correct time not found the function returns empty string.
 *
 * getTime('Breakfast at 09:00') === '09:00'
 * getTime('Breakfast at 09:60, Dinner at 21:00') === '21:00'
 * getTime('Breakfast at 09:59, Dinner at 21:00') === '09:59'
 *
 *
 * @param {string} str
 *
 * @returns {string} - valid time
 */
function getTime(str) {
  if (str.match(/\b\d\d:\d\d\b/) === null) {
    return '';
  } else {
    let timeArr = str.match(/\b\d\d:\d\d\b/)[0].split('');
    let hours = Number(timeArr[0] + timeArr[1]);
    let minuts = Number(timeArr[3] + timeArr[4]);
    if (hours > 23 || minuts > 59) {
      return '';
    } else {
      return timeArr.join('');
    }
  }
}

module.exports = getTime;
