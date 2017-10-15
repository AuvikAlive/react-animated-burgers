'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  background-color: ', ';\n  ', ';\n  &::before,\n  &::after {\n    background-color: ', ';\n    ', ';\n  }\n  &::before,\n  &::after {\n    content: \'\';\n    display: block;\n  }\n  &::before {\n    top: -10px;\n  }\n  &::after {\n    bottom: -10px;\n  }\n'], ['\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  background-color: ', ';\n  ', ';\n  &::before,\n  &::after {\n    background-color: ', ';\n    ', ';\n  }\n  &::before,\n  &::after {\n    content: \'\';\n    display: block;\n  }\n  &::before {\n    top: -10px;\n  }\n  &::after {\n    bottom: -10px;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinesCommon = '\nwidth: 40px;\nheight: 4px;\nborder-radius: 4px;\nposition: absolute;\ntransition-property: transform;\ntransition-duration: 0.15s;\ntransition-timing-function: ease;\n';

var Lines = _styledComponents2.default.span(_templateObject, function (props) {
  return props.barColor || 'black';
}, LinesCommon, function (props) {
  return props.barColor || 'black';
}, LinesCommon);

exports.default = Lines;