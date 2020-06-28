import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSqueeze } from './StyledLinesSqueeze'

export const HamburgerSqueeze = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSqueeze} />
)
