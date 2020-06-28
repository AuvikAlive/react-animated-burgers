import React, { useState, useCallback } from 'react'
import { StyledLabel } from './StyledLabel'
import { StyledBurgerContainer } from './StyledBurgerContainer'

type Props = {
  Component: React.ElementType
  name: string
  buttonColor: string
  barColor: string
}

export const Burger = (props: Props) => {
  const { Component, name, barColor, buttonColor } = props

  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(previousState => !previousState),
    [],
  )

  return (
    <StyledBurgerContainer>
      <Component {...{ isActive, toggleButton, barColor, buttonColor }} />
      <StyledLabel>{name}</StyledLabel>
    </StyledBurgerContainer>
  )
}
