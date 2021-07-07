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
const isCorrectTime = (str) => {
  const timeArr = str.split(':');
  return (timeArr[0] < 24 && timeArr[0].length === 2)
    && (timeArr[1] < 60 && timeArr[1].length === 2);
};

function getTime(str) {
  const timeArr = str.match(/[0-9]+:[0-9]+/g);
  for (const time of timeArr) {
    if (isCorrectTime(time)) {
      return time;
    }
  }
  return '';
}

module.exports = getTime;
