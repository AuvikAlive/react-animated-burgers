import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxThreeDX } from './StyledBoxThreeDX'
import { StyledLinesThreeDX } from './StyledLinesThreeDX'

const HamburgerThreeDX = props => (
  <Button {...props} Box={StyledBoxThreeDX} Lines={StyledLinesThreeDX} />
)

export default HamburgerThreeDX
