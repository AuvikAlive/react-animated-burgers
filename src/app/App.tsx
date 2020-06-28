import React from 'react'
import { StyledApp } from './StyledApp'
import { Burger } from './Burger'
import { burgers } from './burgers'

export const App = () => (
  <StyledApp>
    {burgers.map((burger, index) => (
      <Burger key={index} {...burger} />
    ))}
  </StyledApp>
)
