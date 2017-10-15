'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _BoxThreeDY = require('./BoxThreeDY');

var _BoxThreeDY2 = _interopRequireDefault(_BoxThreeDY);

var _LinesThreeDY = require('./LinesThreeDY');

var _LinesThreeDY2 = _interopRequireDefault(_LinesThreeDY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerThreeDY = function HamburgerThreeDY(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _BoxThreeDY2.default,
      null,
      _react2.default.createElement(_LinesThreeDY2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerThreeDY;