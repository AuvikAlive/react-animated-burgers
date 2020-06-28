import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDX } from './StyledBoxThreeDX'
import { StyledLinesThreeDXReverse } from './StyledLinesThreeDXReverse'

export const HamburgerThreeDXReverse = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxThreeDX} Lines={StyledLinesThreeDXReverse} />
)
