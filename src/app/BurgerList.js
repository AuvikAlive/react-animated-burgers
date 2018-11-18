import React, { Fragment } from 'react'
import { StyledLabel } from './StyledLabel'
import { StyledBurgerContainer } from './StyledBurgerContainer'
import { burgers } from './burgers'

export const BurgerList = props => (
  <Fragment>
    {burgers.map((burger, index) => {
      const {
        Component,
        name,
        buttonColor,
        barColor,
        buttonStyle,
        className,
      } = burger
      return (
        <StyledBurgerContainer key={index}>
          <Component
            isActive={props[`isActive${name}`]}
            toggleButton={props.toggleButton(name)}
            {...{ buttonColor, barColor, buttonStyle, className }}
          />
          <StyledLabel>{name}</StyledLabel>
        </StyledBurgerContainer>
      )
    })}
  </Fragment>
)
