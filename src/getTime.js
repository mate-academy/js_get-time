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
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i][words[i].length - 1] === ',') {
      words[i] = words[i].slice(0, words[i].length - 1);
    }

    if (words[i].includes(':') && words[i].length === 5) {
      const timeParts = words[i].split(':');

      if (parseInt(timeParts[0]) <= 23
      && parseInt(timeParts[0]) >= 0
      && parseInt(timeParts[1]) <= 59
      && parseInt(timeParts[1]) >= 0) {
        return words[i];
      }
    }
  }

  return '';
}

module.exports = getTime;
