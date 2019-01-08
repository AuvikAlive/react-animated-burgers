import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/getBarColor'

const common = `
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
`

const active = `
  transform: rotate(765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
`

const activeCommon = `
  transition-delay: 0s;
`

const activeBefore = `
  ${activeCommon};
  top: 0;
  opacity: 0;
`

const activeAfter = `
  ${activeCommon};
  bottom: 0;
  transform: rotate(90deg);
`

export const StyledLinesVortexReverse = styled(StyledLines)`
  &::before {
    transition-property: top, opacity;
    ${common};
    ${({ isActive }) => isActive && activeBefore};
    ${getBarColor};
  }
  &::after {
    transition-property: bottom, transform;
    ${common};
    ${({ isActive }) => isActive && activeAfter};
    ${getBarColor};
  }
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  ${getBarColor};
  ${({ isActive }) => isActive && active};
`

StyledLinesVortexReverse.displayName = 'StyledLinesVortexReverse'
