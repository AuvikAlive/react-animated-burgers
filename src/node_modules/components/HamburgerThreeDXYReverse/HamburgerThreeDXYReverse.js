import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDXY } from './StyledBoxThreeDXY'
import { StyledLinesThreeDXYReverse } from './StyledLinesThreeDXYReverse'

const HamburgerThreeDXYReverse = props => (
  <Button
    {...props}
    Box={StyledBoxThreeDXY}
    Lines={StyledLinesThreeDXYReverse}
  />
)

export default HamburgerThreeDXYReverse
