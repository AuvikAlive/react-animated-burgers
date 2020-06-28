import styled from 'styled-components'
import { StyledBox } from '../StyledBox'

export const StyledBoxThreeDY = styled(StyledBox)`
  perspective: ${({ buttonWidth }) => buttonWidth * 2}px;
`

StyledBoxThreeDY.displayName = 'StyledBoxThreeDX'
