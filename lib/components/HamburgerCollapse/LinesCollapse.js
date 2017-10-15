'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  ', ';\n  ', ';\n  background-color: ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  ', ';\n  ', ';\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesCollapseCommon = '\ntop: auto;\nbottom: 0;\ntransition-duration: 0.13s;\ntransition-delay: 0.13s;\ntransition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n';

var LinesCollapseAfter = '\ntop: -20px;\ntransition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n';
var LinesCollapseBefore = '\ntransition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n';

var LinesCollapseIsActive = '\ntransform: translate3d(0, -10px, 0) rotate(-45deg);\ntransition-delay: 0.22s;\ntransition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var LinesCollapseIsActiveBefore = '\ntop: 0;\ntransform: rotate(-90deg);\ntransition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n';

var LinesCollapseIsActiveAfter = '\ntop: 0;\nopacity: 0;\ntransition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n';

var LinesCollapse = _Lines2.default.extend(_templateObject, LinesCollapseBefore, function (props) {
  return props.isActive ? LinesCollapseIsActiveBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, LinesCollapseAfter, function (props) {
  return props.isActive ? LinesCollapseIsActiveAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, LinesCollapseCommon, function (props) {
  return props.isActive ? LinesCollapseIsActive : '';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesCollapse;