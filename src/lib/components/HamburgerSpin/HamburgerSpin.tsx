import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesSpin } from './StyledLinesSpin'

export const HamburgerSpin = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesSpin} />
)
