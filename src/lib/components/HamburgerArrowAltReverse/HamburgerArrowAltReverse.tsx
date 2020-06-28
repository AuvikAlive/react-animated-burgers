import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrowAltReverse } from './StyledLinesArrowAltReverse'

export const HamburgerArrowAltReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrowAltReverse} />
)
