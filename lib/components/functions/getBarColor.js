'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getBarColor = exports.getBarColor = function getBarColor(_ref) {
  var barColor = _ref.barColor;
  return 'background-color: ' + (barColor || 'black');
};