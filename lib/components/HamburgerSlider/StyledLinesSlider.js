'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesSlider = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: ', 'px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    top: ', 'px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLinesSlider = exports.StyledLinesSlider = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth);
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && 'transform: rotate(-45deg) translate3d(-' + buttonWidth / 7 + 'px, -' + (0, _functions.getLayerSpacing)(buttonWidth) + 'px, 0); opacity: 0';
}, function (_ref3) {
  var buttonWidth = _ref3.buttonWidth;
  return 2 * (0, _functions.getLayerHeight)(buttonWidth) + 2 * (0, _functions.getLayerSpacing)(buttonWidth);
}, _functions.getBarColor, function (_ref4) {
  var isActive = _ref4.isActive,
      buttonWidth = _ref4.buttonWidth;
  return isActive && 'transform: translate3d(0, -' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) * 2 + 'px, 0) rotate(-90deg)';
}, function (_ref5) {
  var buttonWidth = _ref5.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth) / 2;
}, _functions.getBarColor, function (_ref6) {
  var isActive = _ref6.isActive,
      buttonWidth = _ref6.buttonWidth;
  return isActive && 'transform: translate3d(0, ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(45deg)';
});