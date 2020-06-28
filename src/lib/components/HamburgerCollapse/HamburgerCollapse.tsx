import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesCollapse } from './StyledLinesCollapse'

export const HamburgerCollapse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesCollapse} />
)
