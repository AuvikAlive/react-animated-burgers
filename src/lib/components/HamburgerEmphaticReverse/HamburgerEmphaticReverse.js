import React from 'react'
import { Button } from '../button/Button'
import { StyledBoxEmphatic } from './StyledBoxEmphatic'
import { StyledLinesEmphaticReverse } from './StyledLinesEmphaticReverse'

const HamburgerEmphaticReverse = props => (
  <Button {...props} Box={StyledBoxEmphatic} Lines={StyledLinesEmphaticReverse} />
)

export default HamburgerEmphaticReverse
