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
  const charMask = /(\d{0,}):\t?(\d{0,})[0-9]/g;
  const getTimes = str.match(charMask);
  let getNumbers = '';

  for (let pos = 0; pos < getTimes.length; pos++) {
    getNumbers = getTimes[pos].split(':');

    if (getNumbers[0].length > 2
      || getNumbers[1].length > 2) {
      getNumbers = '';
    }

    if (getNumbers[0] >= 0 && getNumbers[0] <= 23
      && getNumbers[1] >= 0 && getNumbers[1] <= 59) {
      return getNumbers[0] + ':' + getNumbers[1];
    }
  }

  return '';
}

module.exports = getTime;
