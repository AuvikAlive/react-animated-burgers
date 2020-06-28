import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDY } from './StyledBoxThreeDY'
import { StyledLinesThreeDY } from './StyledLinesThreeDY'

export const HamburgerThreeDY = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxThreeDY} Lines={StyledLinesThreeDY} />
)
