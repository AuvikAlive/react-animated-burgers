'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesSpinReverse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = '\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var activeBefore = '\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n';

var activeAfter = '\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var StyledLinesSpinReverse = exports.StyledLinesSpinReverse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && activeBefore;
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && activeAfter;
}, _functions.getBarColor, _functions.getBarColor, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && active;
});

StyledLinesSpinReverse.displayName = 'StyledLinesSpinReverse';