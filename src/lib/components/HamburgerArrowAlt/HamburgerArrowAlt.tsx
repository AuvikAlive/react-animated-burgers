import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesArrowAlt } from './StyledLinesArrowAlt'

export const HamburgerArrowAlt = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesArrowAlt} />
)
