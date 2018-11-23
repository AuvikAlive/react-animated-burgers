'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: ', 'px;\n  height: ', 'px;\n  display: inline-block;\n  position: relative;\n'], ['\n  width: ', 'px;\n  height: ', 'px;\n  display: inline-block;\n  position: relative;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = exports.StyledBox = _styledComponents2.default.div(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return buttonWidth;
}, function (_ref2) {
  var buttonWidth = _ref2.buttonWidth;
  return buttonWidth * 0.6;
});

StyledBox.displayName = 'StyledBox';