import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSliderReverse } from './StyledLinesSliderReverse'

export const HamburgerSliderReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSliderReverse} />
)
