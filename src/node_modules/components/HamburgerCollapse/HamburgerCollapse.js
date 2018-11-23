import React from 'react'
import { Button } from '../button/Button'
import { StyledLinesCollapse } from './StyledLinesCollapse'

const HamburgerCollapse = props => (
  <Button {...props} Lines={StyledLinesCollapse} />
)

export default HamburgerCollapse
