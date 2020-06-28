import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxEmphatic } from './StyledBoxEmphatic'
import { StyledLinesEmphatic } from './StyledLinesEmphatic'

export const HamburgerEmphatic = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxEmphatic} Lines={StyledLinesEmphatic} />
)
