'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition-property: top, opacity;\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  background-color: ', ';\n  ', ';\n'], ['\n  &::before {\n    transition-property: top, opacity;\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  background-color: ', ';\n  ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var common = '\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n';

var active = '\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n';

var activeCommon = '\n  transition-delay: 0s;\n';

var activeBefore = '\n  ' + activeCommon + ';\n  top: 0;\n  opacity: 0;\n';

var activeAfter = '\n  ' + activeCommon + ';\n  bottom: 0;\n  transform: rotate(90deg);\n';

var LinesVortex = _Lines2.default.extend(_templateObject, common, function (props) {
  return props.isActive ? activeBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, common, function (props) {
  return props.isActive ? activeAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? active : '';
});

exports.default = LinesVortex;