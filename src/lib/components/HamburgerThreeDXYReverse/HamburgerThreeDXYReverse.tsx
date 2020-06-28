import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledBoxThreeDXY } from './StyledBoxThreeDXY'
import { StyledLinesThreeDXYReverse } from './StyledLinesThreeDXYReverse'

export const HamburgerThreeDXYReverse = (props: ButtonProps) => (
  <Button
    {...props}
    Box={StyledBoxThreeDXY}
    Lines={StyledLinesThreeDXYReverse}
  />
)
