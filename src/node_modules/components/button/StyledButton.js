import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: ${({ buttonWidth }) => buttonWidth * 0.375}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: ${({ buttonColor }) => buttonColor || 'transparent'};
  margin: 0;
  border: none;
  overflow: visible;
  ${({ buttonStyle }) => buttonStyle};
`

StyledButton.displayName = 'StyledButton'
