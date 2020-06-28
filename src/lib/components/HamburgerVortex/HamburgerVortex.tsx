import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesVortex } from './StyledLinesVortex'

export const HamburgerVortex = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesVortex} />
)
