import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDY } from './StyledBoxThreeDY'
import { StyledLinesThreeDY } from './StyledLinesThreeDY'

const HamburgerThreeDY = props => (
  <Button {...props} Box={StyledBoxThreeDY} Lines={StyledLinesThreeDY} />
)

export default HamburgerThreeDY
