import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrow } from './StyledLinesArrow'

export const HamburgerArrow = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrow} />
)
