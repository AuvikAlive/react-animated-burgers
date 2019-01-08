import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

export const StyledLinesArrowTurnReverse = styled(StyledLines)`
  &::before {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(${-buttonWidth *
        0.2}px, 0, 0) rotate(-45deg) scale(0.7, 1)`};
    ${getBarColor};
  }
  &::after {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(${-buttonWidth *
        0.2}px, 0, 0) rotate(45deg) scale(0.7, 1)`};
    ${getBarColor};
  }
  ${({ isActive }) => isActive && 'transform: rotate(180deg)'};
  ${getBarColor};
`

StyledLinesArrowTurnReverse.displayName = 'StyledLinesArrowTurnReverse'
