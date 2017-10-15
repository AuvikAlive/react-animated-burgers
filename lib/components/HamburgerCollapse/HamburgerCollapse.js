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

var _LinesCollapse = require('./LinesCollapse');

var _LinesCollapse2 = _interopRequireDefault(_LinesCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerCollapse = function HamburgerCollapse(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _Box2.default,
      null,
      _react2.default.createElement(_LinesCollapse2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerCollapse;