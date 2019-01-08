import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

export const StyledLinesBoring = styled(StyledLines)`
  &::before {
    transition-property: none;
    ${({ isActive }) => isActive && 'top: 0; opacity: 0'};
    ${getBarColor};
  }
  &::after {
    transition-property: none;
    ${({ isActive }) => isActive && 'bottom: 0; transform: rotate(-90deg)'};
    ${getBarColor};
  }
  transition-property: none;
  ${({ isActive }) => isActive && 'transform: rotate(45deg)'};
  ${getBarColor};
`

StyledLinesBoring.displayName = 'StyledLinesBoring'
