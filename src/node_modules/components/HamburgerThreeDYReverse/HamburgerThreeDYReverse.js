import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDY } from './StyledBoxThreeDY'
import { StyledLinesThreeDYReverse } from './StyledLinesThreeDYReverse'

const HamburgerThreeDYReverse = props => (
  <Button {...props} Box={StyledBoxThreeDY} Lines={StyledLinesThreeDYReverse} />
)

export default HamburgerThreeDYReverse
