import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesMinus } from './StyledLinesMinus'

export const HamburgerMinus = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesMinus} />
)
