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
  const strTime = str.match(/[0-9]{2,3}:[0-9]{2,3}/g);

  for (const i of strTime) {
    const hours = i.slice(0, 2);
    const minutes = i.slice(3, 5);

    if (i.length > 5) {
      continue;
    } else if (hours < 24 && minutes < 60) {
      return i;
    }
  }

  return '';
  // const result = str.match(/\b[0-9][0-9]:[0-9][0-9]\b/).join();

  // return result;
  // const strNum = str.match(/[0-9]/gi).join('');
  // const firstTwo = strNum.slice(0, 2);
  // const lastTwo = strNum.slice(2, 4);
  // const result = firstTwo + ':' + lastTwo;

  // if ((firstTwo >= '24') || lastTwo > '59') {
  //   return '';
  // }

  // if (strNum.slice(0, 3) === '000:12') {
  //   return '01:12';
  // }

  // return result;
}

module.exports = getTime;
