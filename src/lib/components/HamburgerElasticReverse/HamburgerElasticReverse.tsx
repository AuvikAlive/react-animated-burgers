import React from 'react'
import { Button, ButtonProps } from '../Button'
import { StyledLinesElasticReverse } from './StyledLinesElasticReverse'

export const HamburgerElasticReverse = (props: ButtonProps) => (
  <Button {...props} Lines={StyledLinesElasticReverse} />
)
