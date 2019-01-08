import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

const active = `
  transform: rotate(-225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

const activeBefore = `
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
`

const activeAfter = `
  bottom: 0;
  transform: rotate(90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const StyledLinesSpin = styled(StyledLines)`
  &::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    ${({ isActive }) => isActive && activeBefore};
    ${getBarColor};
  }
  &::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive }) => isActive && activeAfter};
    ${getBarColor};
  }
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  ${getBarColor};
  ${({ isActive }) => isActive && active};
`

StyledLinesSpin.displayName = 'StyledLinesSpin'
