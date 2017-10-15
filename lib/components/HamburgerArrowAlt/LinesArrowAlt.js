'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n'], ['\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IsActiveBefore = '\n  top: 0;\n  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n';
var IsActiveAfter = '\n  bottom: 0;\n  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n';

var LinesArrowAlt = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? IsActiveBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? IsActiveAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesArrowAlt;