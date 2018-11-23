import React from 'react'
import { Button } from '../button/Button'
import { StyledLinesCollapseReverse } from './StyledLinesCollapseReverse'

const HamburgerCollapse = props => (
  <Button {...props} Lines={StyledLinesCollapseReverse} />
)

export default HamburgerCollapse
