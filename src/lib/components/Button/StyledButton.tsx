import styled from 'styled-components'
import { ButtonWidth, ButtonColor } from './types'

type Props = {
  buttonWidth: ButtonWidth
  buttonColor: ButtonColor
}

export const StyledButton = styled.button<Props>`
  padding: ${({ buttonWidth }) => buttonWidth * 0.375}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: ${({ buttonColor }) => buttonColor};
  margin: 0;
  border: none;
  overflow: visible;
`

StyledButton.displayName = 'StyledButton'
