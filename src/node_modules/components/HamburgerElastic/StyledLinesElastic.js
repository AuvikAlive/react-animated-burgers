import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getLayerHeight, getLayerSpacing, getBarColor } from '../functions/'

export const StyledLinesElastic = styled(StyledLines)`
  &::before {
    top: ${({ buttonWidth }) =>
      getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)}px;
    transition: opacity 0.125s 0.275s ease;
    ${({ isActive }) => isActive && 'transition-delay: 0s; opacity: 0;'};
    ${getBarColor};
  }

  &::after {
    top: ${({ buttonWidth }) =>
      2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth)}px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, -${(getLayerHeight(buttonWidth) +
        getLayerSpacing(buttonWidth)) *
        2}px, 0) rotate(-270deg); transition-delay: 0.075s;`};
    ${getBarColor};
  }

  top: ${({ buttonWidth }) => getLayerHeight(buttonWidth) / 2}px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${({ isActive, buttonWidth }) =>
    isActive &&
    `transform: translate3d(0, ${getLayerHeight(buttonWidth) +
      getLayerSpacing(
        buttonWidth
      )}px, 0) rotate(135deg); transition-delay: 0.075s;`};
  ${getBarColor};
`

StyledLinesElastic.displayName = 'StyledLinesElastic'
