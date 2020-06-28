import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrowTurnReverse } from './StyledLinesArrowTurnReverse'

export const HamburgerArrowTurnReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrowTurnReverse} />
)
