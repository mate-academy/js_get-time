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

  const timeSplit = str.match(/\d{2,3}:\d{2,3}/g);
  const timeValidation = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  if (timeSplit.length > 1) {
    for (let i = 0; i < timeSplit.length; i++) {
      if (timeValidation.test(timeSplit[i])) {

      } else {
        timeSplit.splice(i, 1);
      }
    }

    return timeSplit[0];
  } else {
    if (timeValidation.test(timeSplit)) {
      return timeSplit[0];
    } else {
      return '';
    }
  }
}

module.exports = getTime;
