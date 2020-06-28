import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDXY } from './StyledBoxThreeDXY'
import { StyledLinesThreeDXY } from './StyledLinesThreeDXY'

export const HamburgerThreeDXY = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxThreeDXY} Lines={StyledLinesThreeDXY} />
)
