'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../button/Button');

var _StyledBoxThreeDX = require('./StyledBoxThreeDX');

var _StyledLinesThreeDXReverse = require('./StyledLinesThreeDXReverse');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerThreeDXReverse = function HamburgerThreeDXReverse(props) {
  return _react2.default.createElement(_Button.Button, _extends({}, props, { Box: _StyledBoxThreeDX.StyledBoxThreeDX, Lines: _StyledLinesThreeDXReverse.StyledLinesThreeDXReverse }));
};

exports.default = HamburgerThreeDXReverse;