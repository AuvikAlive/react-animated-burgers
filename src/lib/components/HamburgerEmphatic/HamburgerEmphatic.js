import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxEmphatic } from './StyledBoxEmphatic'
import { StyledLinesEmphatic } from './StyledLinesEmphatic'

const HamburgerEmphatic = props => (
  <Button {...props} Box={StyledBoxEmphatic} Lines={StyledLinesEmphatic} />
)

export default HamburgerEmphatic
