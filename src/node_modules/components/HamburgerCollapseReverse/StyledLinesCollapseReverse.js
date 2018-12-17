import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getLayerSpacing, getLayerHeight, getBarColor } from '../functions/'

const linesCollapseCommon = `
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
`

const getLinesCollapseAfter = ({ buttonWidth }) => `
  top: -${getLayerSpacing(buttonWidth) * 2 + getLayerHeight(buttonWidth) * 2}px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
`
const linesCollapseBefore = `
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`

const getLinesCollapseIsActive = ({ buttonWidth }) => `
  transform: translate3d(0, -${getLayerSpacing(buttonWidth) +
    getLayerHeight(buttonWidth)}px, 0) rotate(45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

const linesCollapseIsActiveBefore = `
  top: 0;
  transform: rotate(90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const linesCollapseIsActiveAfter = `
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
`

export const StyledLinesCollapseReverse = styled(StyledLines)`
  &::before {
    ${linesCollapseBefore};
    ${({ isActive }) => isActive && linesCollapseIsActiveBefore};
    ${getBarColor};
  }

  &::after {
    ${getLinesCollapseAfter};
    ${({ isActive }) => isActive && linesCollapseIsActiveAfter};
    ${getBarColor};
  }

  ${linesCollapseCommon};
  ${({ isActive }) => isActive && getLinesCollapseIsActive};
  ${getBarColor};
`

StyledLinesCollapseReverse.displayName = 'StyledLinesCollapseReverse'
