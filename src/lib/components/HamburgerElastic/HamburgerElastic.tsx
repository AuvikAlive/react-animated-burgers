import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesElastic } from './StyledLinesElastic'

export const HamburgerElastic = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesElastic} />
)
