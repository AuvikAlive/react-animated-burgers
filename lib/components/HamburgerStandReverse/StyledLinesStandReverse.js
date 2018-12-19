'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesStandReverse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = '\n  transform: rotate(90deg);\n  background-color: transparent;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n';

var activeBefore = '\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var activeAfter = '\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var StyledLinesStandReverse = exports.StyledLinesStandReverse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && activeBefore;
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && activeAfter;
}, _functions.getBarColor, _functions.getBarColor, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && active;
});

StyledLinesStandReverse.displayName = 'StyledLinesStandReverse';