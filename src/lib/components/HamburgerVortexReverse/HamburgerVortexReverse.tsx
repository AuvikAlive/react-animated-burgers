import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesVortexReverse } from './StyledLinesVortexReverse'

export const HamburgerVortexReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesVortexReverse} />
)
