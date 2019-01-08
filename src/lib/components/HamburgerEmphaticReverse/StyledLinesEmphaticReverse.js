import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getLayerHeight, getLayerSpacing, getBarColor } from '../functions/'

const before = `
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
  top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
`

const getAfter = ({ buttonWidth }) => `
  top: ${getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)}px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
  top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
`

const getIsActiveBefore = buttonWidth => `
  left: ${buttonWidth * 2}px;
  top: ${buttonWidth * 2}px;
  transform: translate3d(-${buttonWidth * 2}px, -${buttonWidth *
  2}px, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const getIsActiveAfter = buttonWidth => `
  right: ${buttonWidth * 2}px;
  top: ${buttonWidth * 2}px;
  transform: translate3d(${buttonWidth * 2}px, -${buttonWidth *
  2}px, 0) rotate(-45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const StyledLinesEmphaticReverse = styled(StyledLines)`
  &::before {
    ${before};
    ${({ isActive, buttonWidth }) =>
      isActive && getIsActiveBefore(buttonWidth)};
    ${getBarColor};
  }

  &::after {
    ${getAfter};
    ${({ isActive, buttonWidth }) => isActive && getIsActiveAfter(buttonWidth)};
    ${getBarColor};
  }

  transition: background-color 0.125s 0.175s ease-in;
  ${getBarColor};
  ${({ isActive }) =>
    isActive &&
    'transition-delay: 0s; transition-timing-function: ease-out; background-color: transparent;'};
`

StyledLinesEmphaticReverse.displayName = 'StyledLinesEmphaticReverse'
