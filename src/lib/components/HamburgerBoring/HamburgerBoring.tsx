import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesBoring } from './StyledLinesBoring'

export const HamburgerBoring = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesBoring} />
)
