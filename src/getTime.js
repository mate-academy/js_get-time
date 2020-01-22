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
  const patternStr = /(\d+):(\d+)/g;
  const patternDigits = /\d+/g;

  const time = str.match(patternStr);
  const result = [];

  for (let i = 0; i < time.length; i++) {
    const minutesOrHours = time[i].match(patternDigits);

    if (+minutesOrHours[0] < 24
      && minutesOrHours[0].length === 2
      && +minutesOrHours[1] < 60
      && minutesOrHours[1].length === 2) {
      result.push(time[i]);
    }
  }

  if (result.length === 0) {
    return '';
  } else {
    return result[0];
  }
}

getTime('Breakfast at 09:59, Dinner at 21:00');

module.exports = getTime;
