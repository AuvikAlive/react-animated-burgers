'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  background-color: ', ';\n  ', ';\n'], ['\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ', ';\n    background-color: ', ';\n  }\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  background-color: ', ';\n  ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = '\n  transform: rotate(90deg);\n  background-color: transparent;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n';

var activeBefore = '\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var activeAfter = '\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var LinesStand = _Lines2.default.extend(_templateObject, function (props) {
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

exports.default = LinesStand;