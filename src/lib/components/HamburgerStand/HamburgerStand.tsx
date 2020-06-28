import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesStand } from './StyledLinesStand'

export const HamburgerStand = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesStand} />
)
