import styled from 'styled-components'
import { StyledBox } from '../styledBox/StyledBox'

export const StyledBoxThreeDX = styled(StyledBox)`
  perspective: ${({ buttonWidth }) => buttonWidth * 2}px;
`

StyledBoxThreeDX.displayName = 'StyledBoxThreeDX'
