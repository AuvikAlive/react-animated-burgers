import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesCollapseReverse } from './StyledLinesCollapseReverse'

export const HamburgerCollapseReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesCollapseReverse} />
)
