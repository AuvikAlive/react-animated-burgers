import styled from 'styled-components'
import { getBarColor } from '../functions/'

const getLinesCommon = ({ buttonWidth }) => `
  width: ${buttonWidth}px;
  height: ${buttonWidth * 0.1}px;
  border-radius: ${buttonWidth * 0.1}px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
`

export const StyledLines = styled.span`
  display: block;
  top: 50%;
  margin-top: ${({ buttonWidth }) => -buttonWidth * 0.05}px;
  ${getBarColor};
  ${getLinesCommon};

  &::before,
  &::after {
    ${getBarColor};
    ${getLinesCommon};
    content: '';
    display: block;
  }

  &::before {
    top: ${({ buttonWidth }) => -buttonWidth * 0.25}px;
  }

  &::after {
    bottom: ${({ buttonWidth }) => -buttonWidth * 0.25}px;
  }
`

StyledLines.displayName = 'StyledLines'
