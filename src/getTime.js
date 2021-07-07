'use strict';

function getTime(str) {
  const regexp = /\b([01]\d|2[0-3]):[0-5]\d\b/;
  const strMatch = str.match(regexp);

  return strMatch === null ? '' : strMatch[0];
}

module.exports = getTime;
