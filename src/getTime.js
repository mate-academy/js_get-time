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
  const timeString = str.match(/\d{2,}:\d{2,}/g);

  for (const time of timeString) {
    const nums = time.split(':');

    if ((nums[0].length === 2 && nums[0] <= 23)
    && (nums[1].length === 2 && nums[1] <= 59)) {
      return nums.join(':');
    }
  }

  return '';
}
module.exports = getTime;
