'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _BoxThreeDX = require('./BoxThreeDX');

var _BoxThreeDX2 = _interopRequireDefault(_BoxThreeDX);

var _LinesThreeDX = require('./LinesThreeDX');

var _LinesThreeDX2 = _interopRequireDefault(_LinesThreeDX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerThreeDX = function HamburgerThreeDX(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _BoxThreeDX2.default,
      null,
      _react2.default.createElement(_LinesThreeDX2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerThreeDX;