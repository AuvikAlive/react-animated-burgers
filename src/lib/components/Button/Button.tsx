import React from 'react'
import { StyledButton } from './StyledButton'
import { StyledBox } from '../StyledBox'
import { StyledLines } from '../StyledLines'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const {
    barColor = 'black',
    Box = StyledBox,
    buttonColor = 'transparent',
    buttonStyle,
    buttonWidth = 40,
    className,
    isActive = false,
    Lines = StyledLines,
    toggleButton = () => {},
    ...rest
  } = props

  return (
    <StyledButton
      onClick={toggleButton}
      aria-label="Navigation"
      style={buttonStyle}
      {...{ buttonWidth, buttonColor, className }}
      {...rest}
    >
      <Box {...{ buttonWidth }}>
        <Lines {...{ buttonWidth, barColor, isActive }} />
      </Box>
    </StyledButton>
  )
}
