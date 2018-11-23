import React from 'react'
import { Button } from '../button/Button'
import { StyledLinesSqueeze } from './StyledLinesSqueeze'

const HamburgerSqueeze = props => (
  <Button {...props} Lines={StyledLinesSqueeze} />
)

export default HamburgerSqueeze
