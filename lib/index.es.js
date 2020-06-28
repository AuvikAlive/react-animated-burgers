import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", "px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: ", ";\n  margin: 0;\n  border: none;\n  overflow: visible;\n"], ["\n  padding: ", "px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: ", ";\n  margin: 0;\n  border: none;\n  overflow: visible;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 0.375;
}, function (_a) {
    var buttonColor = _a.buttonColor;
    return buttonColor;
});
StyledButton.displayName = 'StyledButton';
var templateObject_1;

var StyledBox = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  position: relative;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: inline-block;\n  position: relative;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth;
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 0.6;
});
StyledBox.displayName = 'StyledBox';
var templateObject_1$1;

var getBarColor = function (_a) {
    var barColor = _a.barColor;
    return "background-color: " + barColor;
};

var getLayerHeight = function (buttonWidth) { return buttonWidth * 0.1; };

var getLayerSpacing = function (buttonWidth) { return buttonWidth * 0.15; };

var getLinesCommon = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  width: " + buttonWidth + "px;\n  height: " + buttonWidth * 0.1 + "px;\n  border-radius: " + buttonWidth * 0.1 + "px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n";
};
var StyledLines = styled.span(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: block;\n  top: 50%;\n  margin-top: ", "px;\n  ", ";\n  ", ";\n\n  &::before,\n  &::after {\n    ", ";\n    ", ";\n    content: '';\n    display: block;\n  }\n\n  &::before {\n    top: ", "px;\n  }\n\n  &::after {\n    bottom: ", "px;\n  }\n"], ["\n  display: block;\n  top: 50%;\n  margin-top: ", "px;\n  ", ";\n  ", ";\n\n  &::before,\n  &::after {\n    ", ";\n    ", ";\n    content: '';\n    display: block;\n  }\n\n  &::before {\n    top: ", "px;\n  }\n\n  &::after {\n    bottom: ", "px;\n  }\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return -buttonWidth * 0.05;
}, getBarColor, getLinesCommon, getBarColor, getLinesCommon, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return -buttonWidth * 0.25;
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return -buttonWidth * 0.25;
});
StyledLines.displayName = 'StyledLines';
var templateObject_1$2;

var Button = function (props) {
    var _a = props.barColor, barColor = _a === void 0 ? 'black' : _a, _b = props.Box, Box = _b === void 0 ? StyledBox : _b, _c = props.buttonColor, buttonColor = _c === void 0 ? 'transparent' : _c, buttonStyle = props.buttonStyle, _d = props.buttonWidth, buttonWidth = _d === void 0 ? 40 : _d, className = props.className, _e = props.isActive, isActive = _e === void 0 ? false : _e, _f = props.Lines, Lines = _f === void 0 ? StyledLines : _f, _g = props.toggleButton, toggleButton = _g === void 0 ? function () { } : _g, rest = __rest(props, ["barColor", "Box", "buttonColor", "buttonStyle", "buttonWidth", "className", "isActive", "Lines", "toggleButton"]);
    return (React.createElement(StyledButton, __assign({ onClick: toggleButton, "aria-label": "Navigation", style: buttonStyle }, { buttonWidth: buttonWidth, buttonColor: buttonColor, className: className }, rest),
        React.createElement(Box, __assign({}, { buttonWidth: buttonWidth }),
            React.createElement(Lines, __assign({}, { buttonWidth: buttonWidth, barColor: barColor, isActive: isActive })))));
};

var StyledLinesArrow = styled(StyledLines)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n  }\n  ", ";\n"], ["\n  &::before {\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    ",
    ";\n    ", ";\n  }\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + -buttonWidth * 0.2 + "px, 0, 0) rotate(-45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + -buttonWidth * 0.2 + "px, 0, 0) rotate(45deg) scale(0.7, 1)";
}, getBarColor, getBarColor);
StyledLinesArrow.displayName = 'StyledLinesArrow';
var templateObject_1$3;

var HamburgerArrow = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrow }))); };

var StyledLinesArrowReverse = styled(StyledLines)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n  }\n  ", ";\n"], ["\n  &::before {\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    ",
    ";\n    ", ";\n  }\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + buttonWidth * 0.2 + "px, 0, 0) rotate(45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + buttonWidth * 0.2 + "px, 0, 0) rotate(-45deg) scale(0.7, 1)";
}, getBarColor, getBarColor);
StyledLinesArrowReverse.displayName = 'StyledLinesArrowReverse';
var templateObject_1$4;

var HamburgerArrowReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrowReverse }))); };

var getIsActiveBefore = function (buttonWidth) { return "\n  top: 0;\n  transform: translate3d(" + -buttonWidth * 0.2 + "px, " + -buttonWidth * 0.25 + "px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n"; };
var getIsActiveAfter = function (buttonWidth) { return "\n  bottom: 0;\n  transform: translate3d(" + -buttonWidth * 0.2 + "px, " + buttonWidth * 0.25 + "px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n"; };
var StyledLinesArrowAlt = styled(StyledLines)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveBefore(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveAfter(buttonWidth);
}, getBarColor, getBarColor);
StyledLinesArrowAlt.displayName = 'StyledLinesArrowAlt';
var templateObject_1$5;

var HamburgerArrowAlt = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrowAlt }))); };

var getIsActiveBefore$1 = function (buttonWidth) { return "\n  top: 0;\n  transform: translate3d(" + buttonWidth * 0.2 + "px, " + -buttonWidth * 0.25 + "px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n"; };
var getIsActiveAfter$1 = function (buttonWidth) { return "\n  bottom: 0;\n  transform: translate3d(" + buttonWidth * 0.2 + "px, " + buttonWidth * 0.25 + "px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n"; };
var StyledLinesArrowAltReverse = styled(StyledLines)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.1s ease,\n      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n    ", ";\n    ", ";\n  }\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveBefore$1(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveAfter$1(buttonWidth);
}, getBarColor, getBarColor);
StyledLinesArrowAltReverse.displayName = 'StyledLinesArrowAltReverse';
var templateObject_1$6;

var HamburgerArrowAltReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrowAltReverse }))); };

var StyledLinesArrowTurn = styled(StyledLines)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n  }\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    ",
    ";\n    ", ";\n  }\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + buttonWidth * 0.2 + "px, 0, 0) rotate(45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + buttonWidth * 0.2 + "px, 0, 0) rotate(-45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'transform: rotate(-180deg)';
}, getBarColor);
StyledLinesArrowTurn.displayName = 'StyledLinesArrowTurn';
var templateObject_1$7;

var HamburgerArrowTurn = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrowTurn }))); };

var StyledLinesArrowTurnReverse = styled(StyledLines)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n  }\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ",
    ";\n    ", ";\n  }\n  &::after {\n    ",
    ";\n    ", ";\n  }\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + -buttonWidth * 0.2 + "px, 0, 0) rotate(-45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(" + -buttonWidth * 0.2 + "px, 0, 0) rotate(45deg) scale(0.7, 1)";
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'transform: rotate(180deg)';
}, getBarColor);
StyledLinesArrowTurnReverse.displayName = 'StyledLinesArrowTurnReverse';
var templateObject_1$8;

var HamburgerArrowTurnReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesArrowTurnReverse }))); };

var StyledLinesBoring = styled(StyledLines)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  &::before {\n    transition-property: none;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: none;\n    ", ";\n    ", ";\n  }\n  transition-property: none;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition-property: none;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: none;\n    ", ";\n    ", ";\n  }\n  transition-property: none;\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && 'top: 0; opacity: 0';
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'bottom: 0; transform: rotate(-90deg)';
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'transform: rotate(45deg)';
}, getBarColor);
StyledLinesBoring.displayName = 'StyledLinesBoring';
var templateObject_1$9;

var HamburgerBoring = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesBoring }))); };

var linesCollapseCommon = "\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n";
var getLinesCollapseAfter = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  top: -" + (getLayerSpacing(buttonWidth) * 2 + getLayerHeight(buttonWidth) * 2) + "px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n";
};
var linesCollapseBefore = "\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n";
var getLinesCollapseIsActive = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  transform: translate3d(0, -" + (getLayerSpacing(buttonWidth) + getLayerHeight(buttonWidth)) + "px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n";
};
var linesCollapseIsActiveBefore = "\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var linesCollapseIsActiveAfter = "\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n";
var StyledLinesCollapse = styled(StyledLines)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"])), linesCollapseBefore, function (_a) {
    var isActive = _a.isActive;
    return isActive && linesCollapseIsActiveBefore;
}, getBarColor, getLinesCollapseAfter, function (_a) {
    var isActive = _a.isActive;
    return isActive && linesCollapseIsActiveAfter;
}, getBarColor, linesCollapseCommon, function (_a) {
    var isActive = _a.isActive;
    return isActive && getLinesCollapseIsActive;
}, getBarColor);
StyledLinesCollapse.displayName = 'StyledLinesCollapse';
var templateObject_1$a;

var HamburgerCollapse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesCollapse }))); };

var linesCollapseCommon$1 = "\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n";
var getLinesCollapseAfter$1 = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  top: -" + (getLayerSpacing(buttonWidth) * 2 + getLayerHeight(buttonWidth) * 2) + "px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n";
};
var linesCollapseBefore$1 = "\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n";
var getLinesCollapseIsActive$1 = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  transform: translate3d(0, -" + (getLayerSpacing(buttonWidth) + getLayerHeight(buttonWidth)) + "px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n";
};
var linesCollapseIsActiveBefore$1 = "\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var linesCollapseIsActiveAfter$1 = "\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n";
var StyledLinesCollapseReverse = styled(StyledLines)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n"])), linesCollapseBefore$1, function (_a) {
    var isActive = _a.isActive;
    return isActive && linesCollapseIsActiveBefore$1;
}, getBarColor, getLinesCollapseAfter$1, function (_a) {
    var isActive = _a.isActive;
    return isActive && linesCollapseIsActiveAfter$1;
}, getBarColor, linesCollapseCommon$1, function (_a) {
    var isActive = _a.isActive;
    return isActive && getLinesCollapseIsActive$1;
}, getBarColor);
StyledLinesCollapseReverse.displayName = 'StyledLinesCollapseReverse';
var templateObject_1$b;

var HamburgerCollapseReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesCollapseReverse }))); };

var StyledLinesElastic = styled(StyledLines)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  &::before {\n    top: ", "px;\n    transition: opacity 0.125s 0.275s ease;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ", "px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    top: ",
    "px;\n    transition: opacity 0.125s 0.275s ease;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ",
    "px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ",
    ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ",
    ";\n  ", ";\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'transition-delay: 0s; opacity: 0;';
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return 2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) * 2 + "px, 0) rotate(-270deg); transition-delay: 0.075s;";
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) / 2;
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(135deg); transition-delay: 0.075s;";
}, getBarColor);
StyledLinesElastic.displayName = 'StyledLinesElastic';
var templateObject_1$c;

var HamburgerElastic = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesElastic }))); };

var StyledLinesElasticReverse = styled(StyledLines)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  &::before {\n    top: ", "px;\n    transition: opacity 0.125s 0.275s ease;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ", "px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    top: ",
    "px;\n    transition: opacity 0.125s 0.275s ease;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ",
    "px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    ",
    ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  ",
    ";\n  ", ";\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && 'transition-delay: 0s; opacity: 0;';
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return 2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) * 2 + "px, 0) rotate(270deg); transition-delay: 0.075s;";
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) / 2;
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-135deg); transition-delay: 0.075s;";
}, getBarColor);
StyledLinesElasticReverse.displayName = 'StyledLinesElasticReverse';
var templateObject_1$d;

var HamburgerElasticReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesElasticReverse }))); };

var StyledBoxEmphatic = styled(StyledBox)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var templateObject_1$e;

var before = "\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n";
var getAfter = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  top: " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n";
};
var getIsActiveBefore$2 = function (buttonWidth) { return "\n  left: -" + buttonWidth * 2 + "px;\n  top: -" + buttonWidth * 2 + "px;\n  transform: translate3d(" + buttonWidth * 2 + "px, " + buttonWidth * 2 + "px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n"; };
var getIsActiveAfter$2 = function (buttonWidth) { return "\n  right: -" + buttonWidth * 2 + "px;\n  top: -" + buttonWidth * 2 + "px;\n  transform: translate3d(-" + buttonWidth * 2 + "px, " + buttonWidth * 2 + "px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n"; };
var StyledLinesEmphatic = styled(StyledLines)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ", ";\n    ",
    ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ", ";\n  ",
    ";\n"])), before, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveBefore$2(buttonWidth);
}, getBarColor, getAfter, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveAfter$2(buttonWidth);
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive &&
        'transition-delay: 0s; transition-timing-function: ease-out; background-color: transparent;';
});
StyledLinesEmphatic.displayName = 'StyledLinesEmphatic';
var templateObject_1$f;

var HamburgerEmphatic = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxEmphatic, Lines: StyledLinesEmphatic }))); };

var StyledBoxEmphatic$1 = styled(StyledBox)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var templateObject_1$g;

var before$1 = "\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n";
var getAfter$1 = function (_a) {
    var buttonWidth = _a.buttonWidth;
    return "\n  top: " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),\n  top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n";
};
var getIsActiveBefore$3 = function (buttonWidth) { return "\n  left: " + buttonWidth * 2 + "px;\n  top: " + buttonWidth * 2 + "px;\n  transform: translate3d(-" + buttonWidth * 2 + "px, -" + buttonWidth * 2 + "px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n"; };
var getIsActiveAfter$3 = function (buttonWidth) { return "\n  right: " + buttonWidth * 2 + "px;\n  top: " + buttonWidth * 2 + "px;\n  transform: translate3d(" + buttonWidth * 2 + "px, -" + buttonWidth * 2 + "px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n"; };
var StyledLinesEmphaticReverse = styled(StyledLines)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    ", ";\n    ",
    ";\n    ", ";\n  }\n\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n\n  transition: background-color 0.125s 0.175s ease-in;\n  ", ";\n  ",
    ";\n"])), before$1, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveBefore$3(buttonWidth);
}, getBarColor, getAfter$1, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getIsActiveAfter$3(buttonWidth);
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive &&
        'transition-delay: 0s; transition-timing-function: ease-out; background-color: transparent;';
});
StyledLinesEmphaticReverse.displayName = 'StyledLinesEmphaticReverse';
var templateObject_1$h;

var HamburgerEmphaticReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxEmphatic$1, Lines: StyledLinesEmphaticReverse }))); };

var common = "\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n";
var activeCommon = "\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n";
var activeBefore = "\n " + activeCommon + "\n top: 0;\n";
var activeAfter = "\n  " + activeCommon + "\n  bottom: 0;\n";
var StyledLinesMinus = styled(StyledLines)(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n  ", ";\n"], ["\n  &::before {\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    ", ";\n    ", ";\n    ", ";\n  }\n  ", ";\n"])), common, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore;
}, getBarColor, common, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter;
}, getBarColor, getBarColor);
StyledLinesMinus.displayName = 'StyledLinesMinus';
var templateObject_1$i;

var HamburgerMinus = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesMinus }))); };

var StyledLinesSlider = styled(StyledLines)(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  &::before {\n    top: ", "px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ", "px;\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    top: ",
    "px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ", ";\n    ",
    ";\n  }\n\n  &::after {\n    top: ",
    "px;\n    ", ";\n    ",
    ";\n  }\n\n  top: ", "px;\n  ", ";\n  ",
    ";\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: rotate(-45deg) translate3d(-" + buttonWidth / 7 + "px, -" + getLayerSpacing(buttonWidth) + "px, 0); opacity: 0";
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return 2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) * 2 + "px, 0) rotate(-90deg)";
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) / 2;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
});
var templateObject_1$j;

var HamburgerSlider = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSlider }))); };

var StyledLinesSliderReverse = styled(StyledLines)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  &::before {\n    top: ", "px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ", "px;\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    top: ",
    "px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s;\n    ", ";\n    ",
    ";\n  }\n\n  &::after {\n    top: ",
    "px;\n    ", ";\n    ",
    ";\n  }\n\n  top: ", "px;\n  ", ";\n  ",
    ";\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: rotate(45deg) translate3d(" + buttonWidth / 7 + "px, -" + getLayerSpacing(buttonWidth) + "px, 0); opacity: 0";
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return 2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) * 2 + "px, 0) rotate(90deg)";
}, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) / 2;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
var templateObject_1$k;

var HamburgerSliderReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSliderReverse }))); };

var active = "\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var activeBefore$1 = "\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n";
var activeAfter$1 = "\n  bottom: 0;\n  transform: rotate(90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var StyledLinesSpin = styled(StyledLines)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$1;
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$1;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active;
});
StyledLinesSpin.displayName = 'StyledLinesSpin';
var templateObject_1$l;

var HamburgerSpin = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSpin }))); };

var active$1 = "\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var activeBefore$2 = "\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n";
var activeAfter$2 = "\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var StyledLinesSpinReverse = styled(StyledLines)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.1s 0.25s ease-in,\n      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$2;
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$2;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$1;
});
StyledLinesSpinReverse.displayName = 'StyledLinesSpinReverse';
var templateObject_1$m;

var HamburgerSpinReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSpinReverse }))); };

var active$2 = "\n  transition-delay: 0.22s;\n  background-color: transparent;\n";
var getActiveBefore = function (buttonWidth) { return "\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg);\n"; };
var getActiveAfter = function (buttonWidth) { return "\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg);\n"; };
var StyledLinesSpring = styled(StyledLines)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  &::before {\n    top: ", "px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ", "px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition: background-color 0s 0.13s linear;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    top: ",
    "px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    top: ",
    "px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),\n      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  top: ", "px;\n  transition: background-color 0s 0.13s linear;\n  ", ";\n  ", ";\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getActiveBefore(buttonWidth);
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return 2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth);
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive && getActiveAfter(buttonWidth);
}, getBarColor, function (_a) {
    var buttonWidth = _a.buttonWidth;
    return getLayerHeight(buttonWidth);
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$2;
});
StyledLinesSpring.displayName = 'StyledLinesSpring';
var templateObject_1$n;

var HamburgerSpring = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSpring }))); };

var active$3 = "\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var activeBefore$3 = "\n  top: 0;\n  opacity: 0;\n  transition: top 0.075s ease, opacity 0.075s 0.12s ease;\n";
var activeAfter$3 = "\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var StyledLinesSqueeze = styled(StyledLines)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  &::before {\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.075s 0.12s ease,\n      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease;\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.075s 0.12s ease,\n      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$3;
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$3;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$3;
});
StyledLinesSqueeze.displayName = 'StyledLinesSqueeze';
var templateObject_1$o;

var HamburgerSqueeze = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesSqueeze }))); };

var active$4 = "\n  transform: rotate(-90deg);\n  background-color: transparent;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n";
var activeBefore$4 = "\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var activeAfter$4 = "\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var StyledLinesStand = styled(StyledLines)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$4;
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$4;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$4;
});
StyledLinesStand.displayName = 'StyledLinesStand';
var templateObject_1$p;

var HamburgerStand = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesStand }))); };

var active$5 = "\n  transform: rotate(90deg);\n  background-color: transparent;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n";
var activeBefore$5 = "\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var activeAfter$5 = "\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n";
var StyledLinesStandReverse = styled(StyledLines)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition: top 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  &::after {\n    transition: bottom 0.075s 0.075s ease-in,\n      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    ", ";\n    ", ";\n  }\n\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),\n    background-color 0s 0.075s linear;\n  ", ";\n  ", ";\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$5;
}, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$5;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$5;
});
StyledLinesStandReverse.displayName = 'StyledLinesStandReverse';
var templateObject_1$q;

var HamburgerStandReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesStandReverse }))); };

var StyledBoxThreeDX = styled(StyledBox)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDX.displayName = 'StyledBoxThreeDX';
var templateObject_1$r;

var linesThreeDXIsActive = "\n  background-color: transparent;\n  transform: rotateY(-180deg);\n";
var StyledLinesThreeDX = styled(StyledLines)(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && linesThreeDXIsActive;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDX.displayName = 'StyledLinesThreeDX';
var templateObject_1$s;

var HamburgerThreeDX = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDX, Lines: StyledLinesThreeDX }))); };

var StyledBoxThreeDX$1 = styled(StyledBox)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDX$1.displayName = 'StyledBoxThreeDX';
var templateObject_1$t;

var linesThreeDXIsActive$1 = "\n  background-color: transparent;\n  transform: rotateY(180deg);\n";
var StyledLinesThreeDXReverse = styled(StyledLines)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && linesThreeDXIsActive$1;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDXReverse.displayName = 'StyledLinesThreeDXReverse';
var templateObject_1$u;

var HamburgerThreeDXReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDX$1, Lines: StyledLinesThreeDXReverse }))); };

var StyledBoxThreeDY = styled(StyledBox)(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDY.displayName = 'StyledBoxThreeDX';
var templateObject_1$v;

var LinesThreeDYIsActive = "\n  background-color: transparent;\n  transform: rotateX(-180deg);\n";
var StyledLinesThreeDY = styled(StyledLines)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && LinesThreeDYIsActive;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDY.displayName = 'StyledLinesThreeDY';
var templateObject_1$w;

var HamburgerThreeDY = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDY, Lines: StyledLinesThreeDY }))); };

var StyledBoxThreeDY$1 = styled(StyledBox)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDY$1.displayName = 'StyledBoxThreeDX';
var templateObject_1$x;

var LinesThreeDYIsActive$1 = "\n  background-color: transparent;\n  transform: rotateX(180deg);\n";
var StyledLinesThreeDYReverse = styled(StyledLines)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && LinesThreeDYIsActive$1;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDYReverse.displayName = 'StyledLinesThreeDYReverse';
var templateObject_1$y;

var HamburgerThreeDYReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDY$1, Lines: StyledLinesThreeDYReverse }))); };

var StyledBoxThreeDXY = styled(StyledBox)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDXY.displayName = 'StyledBoxThreeDXY';
var templateObject_1$z;

var LinesThreeDXYIsActive = "\n  background-color: transparent;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n";
var StyledLinesThreeDXY = styled(StyledLines)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && LinesThreeDXYIsActive;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDXY.displayName = 'StyledLinesThreeDXY';
var templateObject_1$A;

var HamburgerThreeDXY = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDXY, Lines: StyledLinesThreeDXY }))); };

var StyledBoxThreeDXY$1 = styled(StyledBox)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  perspective: ", "px;\n"], ["\n  perspective: ", "px;\n"])), function (_a) {
    var buttonWidth = _a.buttonWidth;
    return buttonWidth * 2;
});
StyledBoxThreeDXY$1.displayName = 'StyledBoxThreeDXY';
var templateObject_1$B;

var LinesThreeDXYIsActive$1 = "\n  background-color: transparent;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);\n";
var StyledLinesThreeDXYReverse = styled(StyledLines)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ", ";\n  }\n\n  &::after {\n    ", ";\n  }\n"], ["\n  ", ";\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &::before,\n  &::after {\n    ", ";\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  &::before {\n    ",
    ";\n  }\n\n  &::after {\n    ",
    ";\n  }\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && LinesThreeDXYIsActive$1;
}, getBarColor, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, " + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(45deg)";
}, function (_a) {
    var isActive = _a.isActive, buttonWidth = _a.buttonWidth;
    return isActive &&
        "transform: translate3d(0, -" + (getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)) + "px, 0) rotate(-45deg)";
});
StyledLinesThreeDXYReverse.displayName = 'StyledLinesThreeDXYReverse';
var templateObject_1$C;

var HamburgerThreeDXYReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Box: StyledBoxThreeDXY$1, Lines: StyledLinesThreeDXYReverse }))); };

var common$1 = "\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n";
var active$6 = "\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n";
var activeCommon$1 = "\n  transition-delay: 0s;\n";
var activeBefore$6 = "\n  " + activeCommon$1 + ";\n  top: 0;\n  opacity: 0;\n";
var activeAfter$6 = "\n  " + activeCommon$1 + ";\n  bottom: 0;\n  transform: rotate(-90deg);\n";
var StyledLinesVortex = styled(StyledLines)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  &::before {\n    transition-property: top, opacity;\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ", ";\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition-property: top, opacity;\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ", ";\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ", ";\n  ", ";\n"])), common$1, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$6;
}, getBarColor, common$1, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$6;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$6;
});
StyledLinesVortex.displayName = 'StyledLinesVortex';
var templateObject_1$D;

var HamburgerVortex = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesVortex }))); };

var common$2 = "\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear;\n";
var active$7 = "\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n";
var activeCommon$2 = "\n  transition-delay: 0s;\n";
var activeBefore$7 = "\n  " + activeCommon$2 + ";\n  top: 0;\n  opacity: 0;\n";
var activeAfter$7 = "\n  " + activeCommon$2 + ";\n  bottom: 0;\n  transform: rotate(90deg);\n";
var StyledLinesVortexReverse = styled(StyledLines)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  &::before {\n    transition-property: top, opacity;\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ", ";\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ", ";\n  ", ";\n"], ["\n  &::before {\n    transition-property: top, opacity;\n    ", ";\n    ", ";\n    ", ";\n  }\n  &::after {\n    transition-property: bottom, transform;\n    ", ";\n    ", ";\n    ", ";\n  }\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n  ", ";\n  ", ";\n"])), common$2, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeBefore$7;
}, getBarColor, common$2, function (_a) {
    var isActive = _a.isActive;
    return isActive && activeAfter$7;
}, getBarColor, getBarColor, function (_a) {
    var isActive = _a.isActive;
    return isActive && active$7;
});
StyledLinesVortexReverse.displayName = 'StyledLinesVortexReverse';
var templateObject_1$E;

var HamburgerVortexReverse = function (props) { return (React.createElement(Button, __assign({}, props, { Lines: StyledLinesVortexReverse }))); };

export { HamburgerArrow, HamburgerArrowAlt, HamburgerArrowAltReverse, HamburgerArrowReverse, HamburgerArrowTurn, HamburgerArrowTurnReverse, HamburgerBoring, HamburgerCollapse, HamburgerCollapseReverse, HamburgerElastic, HamburgerElasticReverse, HamburgerEmphatic, HamburgerEmphaticReverse, HamburgerMinus, HamburgerSlider, HamburgerSliderReverse, HamburgerSpin, HamburgerSpinReverse, HamburgerSpring, HamburgerSqueeze, HamburgerStand, HamburgerStandReverse, HamburgerThreeDX, HamburgerThreeDXReverse, HamburgerThreeDXY, HamburgerThreeDXYReverse, HamburgerThreeDY, HamburgerThreeDYReverse, HamburgerVortex, HamburgerVortexReverse };
//# sourceMappingURL=index.es.js.map
