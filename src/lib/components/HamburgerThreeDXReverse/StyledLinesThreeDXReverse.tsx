import styled from 'styled-components'
import { StyledLines } from '../StyledLines'
import { getBarColor, getLayerHeight, getLayerSpacing } from '../functions'

const linesThreeDXIsActive = `
  background-color: transparent;
  transform: rotateY(180deg);
`

export const StyledLinesThreeDXReverse = styled(StyledLines)`
  ${({ isActive }) => isActive && linesThreeDXIsActive};
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

  &::before,
  &::after {
    ${getBarColor};
    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &::before {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, ${
        getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)
      }px, 0) rotate(45deg)`};
  }

  &::after {
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, -${
        getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)
      }px, 0) rotate(-45deg)`};
  }
`

StyledLinesThreeDXReverse.displayName = 'StyledLinesThreeDXReverse'
