'use strict';
var moment = require('moment');

module.exports = function(m) {
  return m.week() - moment(m).startOf('month').week() + 1;
};
