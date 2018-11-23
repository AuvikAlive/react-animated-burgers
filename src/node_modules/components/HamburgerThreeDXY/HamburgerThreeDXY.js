import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDXY } from './StyledBoxThreeDXY'
import { StyledLinesThreeDXY } from './StyledLinesThreeDXY'

const HamburgerThreeDXY = props => (
  <Button {...props} Box={StyledBoxThreeDXY} Lines={StyledLinesThreeDXY} />
)

export default HamburgerThreeDXY
