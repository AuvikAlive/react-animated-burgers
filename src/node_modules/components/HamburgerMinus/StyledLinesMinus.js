import styled from 'styled-components'
import { StyledLines } from '../styledLines/StyledLines'
import { getBarColor } from '../functions/'

const common = `
  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
`

const activeCommon = `
  opacity: 0;
  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
`

const activeBefore = `
 ${activeCommon}
 top: 0;
`

const activeAfter = `
  ${activeCommon}
  bottom: 0;
`

export const StyledLinesMinus = styled(StyledLines)`
  &::before {
    ${common};
    ${({ isActive }) => isActive && activeBefore};
    ${getBarColor};
  }
  &::after {
    ${common};
    ${({ isActive }) => isActive && activeAfter};
    ${getBarColor};
  }
  ${getBarColor};
`

StyledLinesMinus.displayName = 'StyledLinesMinus'
