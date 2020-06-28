import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDX } from './StyledBoxThreeDX'
import { StyledLinesThreeDX } from './StyledLinesThreeDX'

export const HamburgerThreeDX = (props: ButtonProps) => (
  <Button {...props} Box={StyledBoxThreeDX} Lines={StyledLinesThreeDX} />
)
