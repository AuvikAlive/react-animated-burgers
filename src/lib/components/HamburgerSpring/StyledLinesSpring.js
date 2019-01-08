import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getLayerHeight, getLayerSpacing, getBarColor } from '../functions/'

const active = `
  transition-delay: 0.22s;
  background-color: transparent;
`

const getActiveBefore = buttonWidth => `
  top: 0;
  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, ${getLayerHeight(buttonWidth) +
    getLayerSpacing(buttonWidth)}px, 0) rotate(45deg);
`

const getActiveAfter = buttonWidth => `
  top: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, ${getLayerHeight(buttonWidth) +
    getLayerSpacing(buttonWidth)}px, 0) rotate(-45deg);
`

export const StyledLinesSpring = styled(StyledLines)`
  &::before {
    top: ${({ buttonWidth }) =>
      getLayerHeight(buttonWidth) + getLayerSpacing(buttonWidth)}px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive, buttonWidth }) => isActive && getActiveBefore(buttonWidth)};
    ${getBarColor};
  }

  &::after {
    top: ${({ buttonWidth }) =>
      2 * getLayerHeight(buttonWidth) + 2 * getLayerSpacing(buttonWidth)}px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive, buttonWidth }) => isActive && getActiveAfter(buttonWidth)};
    ${getBarColor};
  }

  top: ${({ buttonWidth }) => getLayerHeight(buttonWidth)}px;
  transition: background-color 0s 0.13s linear;
  ${getBarColor};
  ${({ isActive }) => isActive && active};
`

StyledLinesSpring.displayName = 'StyledLinesSpring'
