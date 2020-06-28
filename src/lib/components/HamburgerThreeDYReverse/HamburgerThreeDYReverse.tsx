import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDY } from './StyledBoxThreeDY'
import { StyledLinesThreeDYReverse } from './StyledLinesThreeDYReverse'

export const HamburgerThreeDYReverse = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxThreeDY} Lines={StyledLinesThreeDYReverse} />
)
