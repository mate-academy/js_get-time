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
  let time = '';
  const reg = /(?<!\d)([0-1]{1}[0-9]{1}|[2]{1}[0-3]{1}):([0-5]{1}[0-9]{1})(?!\d)/;
  const matchedSymbols = reg.exec(str);
  
  if(matchedSymbols){
    time = matchedSymbols[0];
  }

  return time;
}

module.exports = getTime;
