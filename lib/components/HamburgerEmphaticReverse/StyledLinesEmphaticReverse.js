'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesEmphaticReverse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var before = '\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n';

var getAfter = function getAfter(_ref) {
  var buttonWidth = _ref.buttonWidth;
  return '\n  top: ' + ((0, _functions.getLayerHeight)(buttonWidth) + (0, _functions.getLayerSpacing)(buttonWidth)) + 'px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n';
};

var getIsActiveBefore = function getIsActiveBefore(buttonWidth) {
  return '\n  left: ' + buttonWidth * 2 + 'px;\n  top: ' + buttonWidth * 2 + 'px;\n  transform: translate3d(-' + buttonWidth * 2 + 'px, -' + buttonWidth * 2 + 'px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n';
};

var getIsActiveAfter = function getIsActiveAfter(buttonWidth) {
  return '\n  right: ' + buttonWidth * 2 + 'px;\n  top: ' + buttonWidth * 2 + 'px;\n  transform: translate3d(' + buttonWidth * 2 + 'px, -' + buttonWidth * 2 + 'px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n';
};

var StyledLinesEmphaticReverse = exports.StyledLinesEmphaticReverse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, before, function (_ref2) {
  var isActive = _ref2.isActive,
      buttonWidth = _ref2.buttonWidth;
  return isActive && getIsActiveBefore(buttonWidth);
}, _functions.getBarColor, getAfter, function (_ref3) {
  var isActive = _ref3.isActive,
      buttonWidth = _ref3.buttonWidth;
  return isActive && getIsActiveAfter(buttonWidth);
}, _functions.getBarColor, _functions.getBarColor, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive && 'transition-delay: 0s; transition-timing-function: ease-out; background-color: transparent;';
});

StyledLinesEmphaticReverse.displayName = 'StyledLinesEmphaticReverse';