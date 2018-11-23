'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLines = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  top: 50%;\n  margin-top: ', 'px;\n  ', ';\n  ', ';\n\n  &::before,\n  &::after {\n    ', ';\n    ', ';\n    content: \'\';\n    display: block;\n  }\n\n  &::before {\n    top: ', 'px;\n  }\n\n  &::after {\n    bottom: ', 'px;\n  }\n'], ['\n  display: block;\n  top: 50%;\n  margin-top: ', 'px;\n  ', ';\n  ', ';\n\n  &::before,\n  &::after {\n    ', ';\n    ', ';\n    content: \'\';\n    display: block;\n  }\n\n  &::before {\n    top: ', 'px;\n  }\n\n  &::after {\n    bottom: ', 'px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _functions = require('../functions/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getLinesCommon = function getLinesCommon(_ref) {
  var buttonWidth = _ref.buttonWidth;
  return '\n  width: ' + buttonWidth + 'px;\n  height: ' + buttonWidth * 0.1 + 'px;\n  border-radius: ' + buttonWidth * 0.1 + 'px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n';
};

var StyledLines = exports.StyledLines = _styledComponents2.default.span(_templateObject, function (_ref2) {
  var buttonWidth = _ref2.buttonWidth;
  return -buttonWidth * 0.05;
}, _functions.getBarColor, getLinesCommon, _functions.getBarColor, getLinesCommon, function (_ref3) {
  var buttonWidth = _ref3.buttonWidth;
  return -buttonWidth * 0.25;
}, function (_ref4) {
  var buttonWidth = _ref4.buttonWidth;
  return -buttonWidth * 0.25;
});

StyledLines.displayName = 'StyledLines';