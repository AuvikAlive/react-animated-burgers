'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _BoxEmphatic = require('./BoxEmphatic');

var _BoxEmphatic2 = _interopRequireDefault(_BoxEmphatic);

var _LinesEmphatic = require('./LinesEmphatic');

var _LinesEmphatic2 = _interopRequireDefault(_LinesEmphatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerEmphatic = function HamburgerEmphatic(props) {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: props.toggleButton, buttonColor: props.buttonColor },
    _react2.default.createElement(
      _BoxEmphatic2.default,
      null,
      _react2.default.createElement(_LinesEmphatic2.default, { isActive: props.isActive, barColor: props.barColor })
    )
  );
};

exports.default = HamburgerEmphatic;