import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

const getIsActiveBefore = buttonWidth => `
  top: 0;
  transform: translate3d(${buttonWidth * 0.2}px, ${-buttonWidth *
  0.25}px, 0) rotate(45deg) scale(0.7, 1);
  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
`
const getIsActiveAfter = buttonWidth => `
  bottom: 0;
  transform: translate3d(${buttonWidth * 0.2}px, ${buttonWidth *
  0.25}px, 0) rotate(-45deg) scale(0.7, 1);
  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
`

export const StyledLinesArrowAltReverse = styled(StyledLines)`
  &::before {
    transition: top 0.1s 0.1s ease,
      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    ${({ isActive, buttonWidth }) =>
      isActive && getIsActiveBefore(buttonWidth)};
    ${getBarColor};
  }
  &::after {
    transition: bottom 0.1s 0.1s ease,
      transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    ${({ isActive, buttonWidth }) => isActive && getIsActiveAfter(buttonWidth)};
    ${getBarColor};
  }
  ${getBarColor};
`

StyledLinesArrowAltReverse.displayName = 'StyledLinesArrowAltReverse'
