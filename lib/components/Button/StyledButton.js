'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', 'px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: ', ';\n  margin: 0;\n  border: none;\n  overflow: visible;\n  ', ';\n'], ['\n  padding: ', 'px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: ', ';\n  margin: 0;\n  border: none;\n  overflow: visible;\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = exports.StyledButton = _styledComponents2.default.button(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return buttonWidth * 0.375;
}, function (_ref2) {
  var buttonColor = _ref2.buttonColor;
  return buttonColor || 'transparent';
}, function (_ref3) {
  var buttonStyle = _ref3.buttonStyle;
  return buttonStyle;
});

StyledButton.displayName = 'StyledButton';