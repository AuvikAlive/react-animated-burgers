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
        barColor,
        buttonColor,
        buttonWidth,
        buttonStyle,
        className,
      } = burger
      return (
        <StyledBurgerContainer key={index}>
          <Component
            key={index}
            isActive={props[`isActive${name}`]}
            toggleButton={props.toggleButton(name)}
            {...{ barColor, buttonColor, buttonWidth, buttonStyle, className }}
          />
          <StyledLabel>{name}</StyledLabel>
        </StyledBurgerContainer>
      )
    })}
  </Fragment>
)
