import React, { Component } from 'react'
import styled from 'styled-components'

import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'
import HamburgerThreeDY from 'components/HamburgerThreeDY'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActiveCollapse: false,
      isActiveThreeDX: false,
      isActiveThreeDY: false
    }

    this.toggleButtonThreeDX = this.toggleButtonThreeDX.bind(this)
    this.toggleButtonThreeDY = this.toggleButtonThreeDY.bind(this)
    this.toggleButtonCollapse = this.toggleButtonCollapse.bind(this)
  }

  toggleButtonThreeDX() {
    this.setState({
      isActiveThreeDX: !this.state.isActiveThreeDX
    })
  }

  toggleButtonThreeDY() {
    this.setState({
      isActiveThreeDY: !this.state.isActiveThreeDY
    })
  }

  toggleButtonCollapse() {
    this.setState({
      isActiveCollapse: !this.state.isActiveCollapse
    })
  }

  render() {
    return (
      <AppContainer>
        <HamburgerThreeDX
          isActive={this.state.isActiveThreeDX}
          toggleButton={this.toggleButtonThreeDX}
          buttonColor="black"
          barColor="red"
        />

        <HamburgerThreeDY
          isActive={this.state.isActiveThreeDY}
          toggleButton={this.toggleButtonThreeDY}
          buttonColor="black"
          barColor="red"
        />

        <HamburgerCollapse
          isActive={this.state.isActiveCollapse}
          toggleButton={this.toggleButtonCollapse}
          buttonColor="black"
          barColor="red"
        />
      </AppContainer>
    )
  }
}

export default App
