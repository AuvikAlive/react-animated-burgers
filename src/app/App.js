import React, { Component } from 'react'
import { StyledApp } from './StyledApp'
import { burgers } from './burgers'
import { BurgerList } from './BurgerList'
import { getActiveStateProperty } from './getActiveStateProperty'

export class App extends Component {
  state = burgers.reduce((accumulator, currentValue) => {
    accumulator[getActiveStateProperty(currentValue.name)] = false

    return accumulator
  }, {})

  toggleButton = name => () => {
    const stateProperty = getActiveStateProperty(name)

    this.setState({
      [stateProperty]: !this.state[stateProperty],
    })
  }

  render() {
    return (
      <StyledApp>
        <BurgerList toggleButton={this.toggleButton} {...this.state} />
      </StyledApp>
    )
  }
}
