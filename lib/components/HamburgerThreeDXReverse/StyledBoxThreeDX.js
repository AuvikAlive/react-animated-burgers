'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBoxThreeDX = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  perspective: ', 'px;\n'], ['\n  perspective: ', 'px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StyledBox = require('../styledBox/StyledBox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBoxThreeDX = exports.StyledBoxThreeDX = (0, _styledComponents2.default)(_StyledBox.StyledBox)(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return buttonWidth * 2;
});

StyledBoxThreeDX.displayName = 'StyledBoxThreeDX';