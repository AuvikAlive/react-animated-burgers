import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSpring } from './StyledLinesSpring'

export const HamburgerSpring = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSpring} />
)
