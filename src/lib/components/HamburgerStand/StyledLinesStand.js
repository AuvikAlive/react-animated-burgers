import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

const active = `
  transform: rotate(-90deg);
  background-color: transparent;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
`

const activeBefore = `
  top: 0;
  transform: rotate(-45deg);
  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const activeAfter = `
  bottom: 0;
  transform: rotate(45deg);
  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const StyledLinesStand = styled(StyledLines)`
  &::before {
    transition: top 0.075s 0.075s ease-in,
      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive }) => isActive && activeBefore};
    ${getBarColor};
  }
  &::after {
    transition: bottom 0.075s 0.075s ease-in,
      transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({ isActive }) => isActive && activeAfter};
    ${getBarColor};
  }
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    background-color 0s 0.075s linear;
  ${getBarColor};
  ${({ isActive }) => isActive && active};
`

StyledLinesStand.displayName = 'StyledLinesStand'
