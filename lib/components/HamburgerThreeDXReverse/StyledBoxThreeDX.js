'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBoxThreeDX = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  perspective: ', 'px;\n'], ['\n  perspective: ', 'px;\n']);

var _StyledBox = require('../styledBox/StyledBox');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBoxThreeDX = exports.StyledBoxThreeDX = _StyledBox.StyledBox.extend(_templateObject, function (_ref) {
  var buttonWidth = _ref.buttonWidth;
  return buttonWidth * 2;
});

StyledBoxThreeDX.displayName = 'StyledBoxThreeDX';