'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    background-color: ', ';\n    ', ';\n  }\n  &::after {\n    top: 20px;\n    background-color: ', ';\n    ', ';\n  }\n  top: 2px;\n  background-color: ', ';\n  ', ';\n'], ['\n  &::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    background-color: ', ';\n    ', ';\n  }\n  &::after {\n    top: 20px;\n    background-color: ', ';\n    ', ';\n  }\n  top: 2px;\n  background-color: ', ';\n  ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesSlider = _Lines2.default.extend(_templateObject, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0); opacity: 0;' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, -20px, 0) rotate(-90deg);' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: translate3d(0, 10px, 0) rotate(45deg);' : '';
});

exports.default = LinesSlider;