import React, { Component } from 'react'
import styled from 'styled-components'

import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'

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
      isActiveThreeDX: false
    }

    this.toggleButtonCollapse = this.toggleButtonCollapse.bind(this)
    this.toggleButtonThreeDX = this.toggleButtonThreeDX.bind(this)
  }

  toggleButtonCollapse() {
    this.setState({
      isActiveCollapse: !this.state.isActiveCollapse
    })
  }

  toggleButtonThreeDX() {
    this.setState({
      isActiveThreeDX: !this.state.isActiveThreeDX
    })
  }

  render() {
    return (
      <AppContainer>
        <HamburgerThreeDX
          isActive={this.state.isActiveThreeDX}
          toggleButton={this.toggleButtonThreeDX}
        />

        <HamburgerCollapse
          isActive={this.state.isActiveCollapse}
          toggleButton={this.toggleButtonCollapse}
        />
      </AppContainer>
    )
  }
}

export default App
