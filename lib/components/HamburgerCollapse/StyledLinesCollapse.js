'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesCollapse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var linesCollapseCommon = '\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n';

var getLinesCollapseAfter = function getLinesCollapseAfter(_ref) {
  var buttonWidth = _ref.buttonWidth;
  return '\n  top: -' + ((0, _functions.getLayerSpacing)(buttonWidth) * 2 + (0, _functions.getLayerHeight)(buttonWidth) * 2) + 'px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n';
};
var linesCollapseBefore = '\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n';

var getLinesCollapseIsActive = function getLinesCollapseIsActive(_ref2) {
  var buttonWidth = _ref2.buttonWidth;
  return '\n  transform: translate3d(0, -' + ((0, _functions.getLayerSpacing)(buttonWidth) + (0, _functions.getLayerHeight)(buttonWidth)) + 'px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n';
};

var linesCollapseIsActiveBefore = '\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var linesCollapseIsActiveAfter = '\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n';

var StyledLinesCollapse = exports.StyledLinesCollapse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, linesCollapseBefore, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && linesCollapseIsActiveBefore;
}, _functions.getBarColor, getLinesCollapseAfter, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive && linesCollapseIsActiveAfter;
}, _functions.getBarColor, linesCollapseCommon, function (_ref5) {
  var isActive = _ref5.isActive;
  return isActive && getLinesCollapseIsActive;
}, _functions.getBarColor);

StyledLinesCollapse.displayName = 'StyledLinesCollapse';