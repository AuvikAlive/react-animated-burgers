import styled from 'styled-components'
import { StyledBox } from '../styledBox/StyledBox'

export const StyledBoxThreeDXY = styled(StyledBox)`
  perspective: ${({ buttonWidth }) => buttonWidth * 2}px;
`

StyledBoxThreeDXY.displayName = 'StyledBoxThreeDXY'
