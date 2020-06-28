import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrowTurn } from './StyledLinesArrowTurn'

export const HamburgerArrowTurn = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrowTurn} />
)
