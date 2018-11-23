import React from 'react'
import { Button } from '../button/Button'
import { StyledLinesVortexReverse } from './StyledLinesVortexReverse'

const HamburgerVortex = props => (
  <Button {...props} Lines={StyledLinesVortexReverse} />
)

export default HamburgerVortex
