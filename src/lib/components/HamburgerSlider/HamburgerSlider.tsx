import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSlider } from './StyledLinesSlider'

export const HamburgerSlider = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSlider} />
)
