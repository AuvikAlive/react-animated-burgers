'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  transition: background-color 0.125s 0.175s ease-in;\n  background-color: ', ';\n  ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  transition: background-color 0.125s 0.175s ease-in;\n  background-color: ', ';\n  ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var before = '\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n';

var isActiveBefore = '\n  left: -80px;\n  top: -80px;\n  transform: translate3d(80px, 80px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n';

var after = '\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n';

var isActiveAfter = '\n  right: -80px;\n  top: -80px;\n  transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n';

var LinesEmphatic = _Lines2.default.extend(_templateObject, before, function (props) {
  return props.isActive ? isActiveBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, after, function (props) {
  return props.isActive ? isActiveAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.isActive ? 'transition-delay: 0s; transition-timing-function: ease-out; background-color: transparent;' : '';
});

exports.default = LinesEmphatic;