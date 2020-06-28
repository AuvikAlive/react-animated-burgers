import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesStandReverse } from './StyledLinesStandReverse'

export const HamburgerStandReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesStandReverse} />
)
