'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n'], ['\n  &::before {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  &::after {\n    ', ';\n    ', ';\n    background-color: ', ';\n  }\n  background-color: ', ';\n']);

var _Lines = require('../Lines/Lines');

var _Lines2 = _interopRequireDefault(_Lines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var common = '\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n';

var activeCommon = '\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n';

var activeBefore = '\n ' + activeCommon + '\n top: 0;\n';

var activeAfter = '\n  ' + activeCommon + '\n  bottom: 0;\n';

var LinesMinus = _Lines2.default.extend(_templateObject, common, function (props) {
  return props.isActive ? activeBefore : '';
}, function (props) {
  return props.barColor || 'black';
}, common, function (props) {
  return props.isActive ? activeAfter : '';
}, function (props) {
  return props.barColor || 'black';
}, function (props) {
  return props.barColor || 'black';
});

exports.default = LinesMinus;