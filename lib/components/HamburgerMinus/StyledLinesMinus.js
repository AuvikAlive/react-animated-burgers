'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinesMinus = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n  ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    ', ';\n  }\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledLines = require('../styledLines/StyledLines');

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var common = '\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n';

var activeCommon = '\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n';

var activeBefore = '\n ' + activeCommon + '\n top: 0;\n';

var activeAfter = '\n  ' + activeCommon + '\n  bottom: 0;\n';

var StyledLinesMinus = exports.StyledLinesMinus = (0, _styledComponents2.default)(_StyledLines.StyledLines)(_templateObject, common, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && activeBefore;
}, _functions.getBarColor, common, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive && activeAfter;
}, _functions.getBarColor, _functions.getBarColor);

StyledLinesMinus.displayName = 'StyledLinesMinus';