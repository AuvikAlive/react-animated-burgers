'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    background-color: ', ';\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ', ';\n  }\n\n  &::after {\n    ', ';\n  }\n'], ['\n  ', ';\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    background-color: ', ';\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ', ';\n  }\n\n  &::after {\n    ', ';\n  }\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesThreeDXIsActive = '\n  background-color: transparent;\n  transform: rotateY(180deg);\n';

var LinesThreedX = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? LinesThreeDXIsActive : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, 10px, 0) rotate(45deg)' : '';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, -10px, 0) rotate(-45deg)' : '';
});

exports.default = LinesThreedX;