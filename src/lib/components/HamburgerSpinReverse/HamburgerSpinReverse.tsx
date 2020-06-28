import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSpinReverse } from './StyledLinesSpinReverse'

export const HamburgerSpinReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSpinReverse} />
)
