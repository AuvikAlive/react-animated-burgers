'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    transition-property: none;\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition-property: none;\n    ', ';\n    background-color: ', ';\n  }\n  transition-property: none;\n  ', ';\n  background-color: ', ';\n'], ['\n  &::before {\n    transition-property: none;\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    transition-property: none;\n    ', ';\n    background-color: ', ';\n  }\n  transition-property: none;\n  ', ';\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesBoring = _Lines2.default.extend(_templateObject, function (props) {
  return props.isActive ? 'top: 0; opacity: 0;' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'bottom: 0; transform: rotate(-90deg);' : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transform: rotate(45deg)' : '';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesBoring;