import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getLayerHeight, getLayerSpacing, getBarColor } from '../functions/'

export const StyledLinesSlider = styled(StyledLines)`
  &::before {
    top: ${({ buttonWidth }) =>
      getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)}px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    ${getBarColor};
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: rotate(-45deg) translate3d(-${buttonWidth /
        7}px, -${getLayerSpacing(buttonWidth)}px, 0); opacity: 0`};
  }

  &::after {
    top: ${({ buttonWidth }) =>
      2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth)}px;
    ${getBarColor};
    ${({ isActive, buttonWidth }) =>
      isActive &&
      `transform: translate3d(0, -${(getLayerHeight(buttonWidth) +
        getLayerSpacing(buttonWidth)) *
        2}px, 0) rotate(-90deg)`};
  }

  top: ${({ buttonWidth }) => getLayerHeight(buttonWidth) / 2}px;
  ${getBarColor};
  ${({ isActive, buttonWidth }) =>
    isActive &&
    `transform: translate3d(0, ${getLayerHeight(buttonWidth) +
      getLayerSpacing(buttonWidth)}px, 0) rotate(45deg)`};
`
