'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesSpring = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: ', 'px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  transition: background-color 0s 0.13s linear;\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    top: ', 'px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    top: ', 'px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    ', ';\n  }\n\n  top: ', 'px;\n  transition: background-color 0s 0.13s linear;\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = '\n  transition-delay: 0.22s;\n  background-color: transparent;\n';

var getActiveBefore = function getActiveBefore(buttonWidth) {
  return '\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(45deg);\n';
};

var getActiveAfter = function getActiveAfter(buttonWidth) {
  return '\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px, 0) rotate(-45deg);\n';
};

var StyledLinesSpring = exports.StyledLinesSpring = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth);
}, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && getActiveBefore(buttonWidth);
}, _functions.getBarColor, function (_ref3) {
  var buttonWidth = _ref3.buttonWidth;
  return 2 * (0, _functions.getLayerHeight)(buttonWidth) + 2 * (0, _functions.getLayerSpacing)(buttonWidth);
}, function (_ref4) {
  var isActive = _ref4.isActive,
      buttonWidth = _ref4.buttonWidth;
  return isActive && getActiveAfter(buttonWidth);
}, _functions.getBarColor, function (_ref5) {
  var buttonWidth = _ref5.buttonWidth;
  return (0, _functions.getLayerHeight)(buttonWidth);
}, _functions.getBarColor, function (_ref6) {
  var isActive = _ref6.isActive;
  return isActive && active;
});

StyledLinesSpring.displayName = 'StyledLinesSpring';