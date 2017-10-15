'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _BoxThreeDXY = require('./BoxThreeDXY');

var _BoxThreeDXY2 = _interopRequireDefault(_BoxThreeDXY);

var _LinesThreeDXY = require('./LinesThreeDXY');

var _LinesThreeDXY2 = _interopRequireDefault(_LinesThreeDXY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerThreeDXY = function HamburgerThreeDXY(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _BoxThreeDXY2.default,
      null,
      _react2.default.createElement(_LinesThreeDXY2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerThreeDXY;