'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesArrowTurnReverse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n  }\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n  }\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLinesArrowTurnReverse = exports.StyledLinesArrowTurnReverse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive,
      buttonWidth = _ref.buttonWidth;
  return isActive && 'transform: translate3d(' + -buttonWidth * 0.2 + 'px, 0, 0) rotate(-45deg) scale(0.7, 1)';
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && 'transform: translate3d(' + -buttonWidth * 0.2 + 'px, 0, 0) rotate(45deg) scale(0.7, 1)';
}, _functions.getBarColor, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && 'transform: rotate(180deg)';
}, _functions.getBarColor);

StyledLinesArrowTurnReverse.displayName = 'StyledLinesArrowTurnReverse';