'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesVortexReverse = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition-property: top, opacity;\n    ', ';\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ', ';\n    ', ';\n    ', ';\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ', ';\n  ', ';\n'], ['\n  &::before {\n    transition-property: top, opacity;\n    ', ';\n    ', ';\n    ', ';\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ', ';\n    ', ';\n    ', ';\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _getBarColor = require('../functions/getBarColor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var common = '\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n';

var active = '\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n';

var activeCommon = '\n  transition-delay: 0s;\n';

var activeBefore = '\n  ' + activeCommon + ';\n  top: 0;\n  opacity: 0;\n';

var activeAfter = '\n  ' + activeCommon + ';\n  bottom: 0;\n  transform: rotate(90deg);\n';

var StyledLinesVortexReverse = exports.StyledLinesVortexReverse = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, common, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && activeBefore;
}, _getBarColor.getBarColor, common, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && activeAfter;
}, _getBarColor.getBarColor, _getBarColor.getBarColor, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && active;
});

StyledLinesVortexReverse.displayName = 'StyledLinesVortexReverse';