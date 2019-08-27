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
  const pattern = /\d+:\d+/g;
  const times = str.match(pattern);

  const findTime = times.find((time) => {
    const partTime = time.split(':');
    return (Number(partTime[0]) < 24
      && partTime[0].length <= 2
      && partTime[1].length <= 2
      && Number(partTime[1] < 60));
  });

  return findTime || '';
}

module.exports = getTime;
