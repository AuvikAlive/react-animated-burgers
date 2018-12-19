'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesBoring = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition-property: none;\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition-property: none;\n    ', ';\n    ', ';\n  }\n  transition-property: none;\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    transition-property: none;\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition-property: none;\n    ', ';\n    ', ';\n  }\n  transition-property: none;\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLinesBoring = exports.StyledLinesBoring = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && 'top: 0; opacity: 0';
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && 'bottom: 0; transform: rotate(-90deg)';
}, _functions.getBarColor, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && 'transform: rotate(45deg)';
}, _functions.getBarColor);

StyledLinesBoring.displayName = 'StyledLinesBoring';