'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: 10px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    top: 20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  top: 2px;\n  transition: background-color 0s 0.13s linear;\n  background-color: ', ';\n  ', ';\n'], ['\n  &::before {\n    top: 10px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    top: 20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  top: 2px;\n  transition: background-color 0s 0.13s linear;\n  background-color: ', ';\n  ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = '\n  transition-delay: 0.22s;\n  background-color: transparent;\n';

var activeBefore = '\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(45deg);\n';

var activeAfter = '\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(-45deg);\n';

var LinesSpring = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? activeBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? activeAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? active : '';
});

exports.default = LinesSpring;