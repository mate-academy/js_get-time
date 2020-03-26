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
  const timeStamps = str.match(/\d{2,3}:\d{2,3}/g);

  for (let i = 0; i < timeStamps.length; i++) {
    const hours = timeStamps[i].slice(0, 2);
    const minutes = timeStamps[i].slice(3, 5);

    if (timeStamps[i].length > 5) {
      continue;
    }

    if (hours < 24 && minutes < 60) {
      return timeStamps[i];
    }
  }

  return '';
}

module.exports = getTime;
