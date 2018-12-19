'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesElastic = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: ', 'px;\n    transition: opacity 0.125s 0.275s ease;\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    top: ', 'px;\n    transition: opacity 0.125s 0.275s ease;\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLinesElastic = exports.StyledLinesElastic = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth);
}, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && 'transition-delay: 0s; opacity: 0;';
}, _functions.getBarColor, function (_ref3) {
  var buttonWidth = _ref3.buttonWidth;
  return 2 * (0, _functions.getLayerHeight)(buttonWidth) + 2 * (0, _functions.getLayerSpacing)(buttonWidth);
}, function (_ref4) {
  var isActive = _ref4.isActive,
      buttonWidth = _ref4.buttonWidth;
  return isActive && 'transform: translate3d(0, -' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) * 2 + 'px, 0) rotate(-270deg); transition-delay: 0.075s;';
}, _functions.getBarColor, function (_ref5) {
  var buttonWidth = _ref5.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth) / 2;
}, function (_ref6) {
  var isActive = _ref6.isActive,
      buttonWidth = _ref6.buttonWidth;
  return isActive && 'transform: translate3d(0, ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(135deg); transition-delay: 0.075s;';
}, _functions.getBarColor);

StyledLinesElastic.displayName = 'StyledLinesElastic';