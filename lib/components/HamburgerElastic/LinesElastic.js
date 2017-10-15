'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease;\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ', ';\n    background-color: ', ';\n  }\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  ', ';\n  background-color: ', ';\n'], ['\n  &::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease;\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ', ';\n    background-color: ', ';\n  }\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  ', ';\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesElastic = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? 'transition-delay: 0s; opacity: 0;' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, -20px, 0) rotate(-270deg); transition-delay: 0.075s;' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, 10px, 0) rotate(135deg); transition-delay: 0.075s;' : '';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesElastic;