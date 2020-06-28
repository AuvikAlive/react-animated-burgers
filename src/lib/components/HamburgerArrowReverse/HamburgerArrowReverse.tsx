import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrowReverse } from './StyledLinesArrowReverse'

export const HamburgerArrowReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrowReverse} />
)
