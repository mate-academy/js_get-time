'use strict';

function getTime(str) {
  const regexp = /\b([01]\d|2[0-3]):[0-5]\d\b/;

  return str.match(regexp) === null ? '' : str.match(regexp)[0];
}

module.exports = getTime;
