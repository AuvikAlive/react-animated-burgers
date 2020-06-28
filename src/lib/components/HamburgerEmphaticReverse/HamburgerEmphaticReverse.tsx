import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxEmphatic } from './StyledBoxEmphatic'
import { StyledLinesEmphaticReverse } from './StyledLinesEmphaticReverse'

export const HamburgerEmphaticReverse = (props: ButtonProps) => (
  <Button
    {...props}
    Box={StyledBoxEmphatic}
    Lines={StyledLinesEmphaticReverse}
  />
)
