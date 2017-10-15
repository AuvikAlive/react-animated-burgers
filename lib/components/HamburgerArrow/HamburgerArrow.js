'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _LinesArrow = require('./LinesArrow');

var _LinesArrow2 = _interopRequireDefault(_LinesArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerArrow = function HamburgerArrow(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _Box2.default,
      null,
      _react2.default.createElement(_LinesArrow2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerArrow;