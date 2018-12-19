'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesThreeDY = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ', ';\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ', ';\n  }\n\n  &::after {\n    ', ';\n  }\n'], ['\n  ', ';\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ', ';\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ', ';\n  }\n\n  &::after {\n    ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesThreeDYIsActive = '\n  background-color: transparent;\n  transform: rotateX(-180deg);\n';

var StyledLinesThreeDY = exports.StyledLinesThreeDY = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && LinesThreeDYIsActive;
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && 'transform: translate3d(0, ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(45deg)';
}, function (_ref3) {
  var isActive = _ref3.isActive,
      buttonWidth = _ref3.buttonWidth;
  return isActive && 'transform: translate3d(0, -' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(-45deg)';
});

StyledLinesThreeDY.displayName = 'StyledLinesThreeDY';