import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

const active = `
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

const activeBefore = `
  top: 0;
  opacity: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease;
`

const activeAfter = `
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const StyledLinesSqueeze = styled(StyledLines)`
  &::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    ${({ isActive }) => isActive && activeBefore};
    ${getBarColor};
  }
  &::after {
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive }) => isActive && activeAfter};
    ${getBarColor};
  }
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  ${getBarColor};
  ${({ isActive }) => isActive && active};
`

StyledLinesSqueeze.displayName = 'StyledLinesSqueeze'
