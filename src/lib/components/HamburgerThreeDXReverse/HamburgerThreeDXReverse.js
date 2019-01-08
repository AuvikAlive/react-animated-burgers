import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDX } from './StyledBoxThreeDX'
import { StyledLinesThreeDXReverse } from './StyledLinesThreeDXReverse'

const HamburgerThreeDXReverse = props => (
  <Button {...props} Box={StyledBoxThreeDX} Lines={StyledLinesThreeDXReverse} />
)

export default HamburgerThreeDXReverse
