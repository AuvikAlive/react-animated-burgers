'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n'], ['\n  &::before {\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesArrow = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? 'transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1)' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1)' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesArrow;