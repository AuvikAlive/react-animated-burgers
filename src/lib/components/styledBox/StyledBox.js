import styled from 'styled-components'

export const StyledBox = styled.div`
  width: ${({ buttonWidth }) => buttonWidth}px;
  height: ${({ buttonWidth }) => buttonWidth * 0.6}px;
  display: inline-block;
  position: relative;
`

StyledBox.displayName = 'StyledBox'
