'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesArrowAlt = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    ', ';\n  }\n  ', ';\n'], ['\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    ', ';\n  }\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getIsActiveBefore = function getIsActiveBefore(buttonWidth) {
  return '\n  top: 0;\n  transform: translate3d(' + -buttonWidth * 0.2 + 'px, ' + -buttonWidth * 0.25 + 'px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n';
};
var getIsActiveAfter = function getIsActiveAfter(buttonWidth) {
  return '\n  bottom: 0;\n  transform: translate3d(' + -buttonWidth * 0.2 + 'px, ' + buttonWidth * 0.25 + 'px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n';
};

var StyledLinesArrowAlt = exports.StyledLinesArrowAlt = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, function (_ref) {
  var isActive = _ref.isActive,
      buttonWidth = _ref.buttonWidth;
  return isActive && getIsActiveBefore(buttonWidth);
}, _functions.getBarColor, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && getIsActiveAfter(buttonWidth);
}, _functions.getBarColor, _functions.getBarColor);

StyledLinesArrowAlt.displayName = 'StyledLinesArrowAlt';