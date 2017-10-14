import React, { Component } from 'react'
import styled from 'styled-components'

import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'
import HamburgerThreeDY from 'components/HamburgerThreeDY'
import HamburgerThreeDXY from 'components/HamburgerThreeDXY'
import HamburgerArrow from 'components/HamburgerArrow'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
`

const BurgerContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Label = styled.div`margin: 15px 0;`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActiveThreeDX: false,
      isActiveThreeDY: false,
      isActiveThreeDXY: false,
      isActiveCollapse: false,
      isActiveArrow: false
    }

    this.toggleButtonThreeDX = this.toggleButtonThreeDX.bind(this)
    this.toggleButtonThreeDY = this.toggleButtonThreeDY.bind(this)
    this.toggleButtonThreeDXY = this.toggleButtonThreeDXY.bind(this)
    this.toggleButtonCollapse = this.toggleButtonCollapse.bind(this)
    this.toggleButtonArrow = this.toggleButtonArrow.bind(this)
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

  toggleButtonThreeDXY() {
    this.setState({
      isActiveThreeDXY: !this.state.isActiveThreeDXY
    })
  }

  toggleButtonCollapse() {
    this.setState({
      isActiveCollapse: !this.state.isActiveCollapse
    })
  }

  toggleButtonArrow() {
    this.setState({
      isActiveArrow: !this.state.isActiveArrow
    })
  }

  render() {
    return (
      <AppContainer>
        <BurgerContainer>
          <HamburgerThreeDX
            isActive={this.state.isActiveThreeDX}
            toggleButton={this.toggleButtonThreeDX}
            buttonColor="#FFBC67"
            barColor="white"
          />
          <Label>HamburgerThreeDX</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerThreeDY
            isActive={this.state.isActiveThreeDY}
            toggleButton={this.toggleButtonThreeDY}
            buttonColor="#DA727E"
            barColor="white"
          />
          <Label>HamburgerThreeDY</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerThreeDXY
            isActive={this.state.isActiveThreeDXY}
            toggleButton={this.toggleButtonThreeDXY}
            buttonColor="#AC6C82"
            barColor="white"
          />
          <Label>HamburgerThreeDXY</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerCollapse
            isActive={this.state.isActiveCollapse}
            toggleButton={this.toggleButtonCollapse}
            buttonColor="#685C79"
            barColor="white"
          />
          <Label>HamburgerCollapse</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerArrow
            isActive={this.state.isActiveArrow}
            toggleButton={this.toggleButtonArrow}
            buttonColor="#455C7B"
            barColor="white"
          />
          <Label>HamburgerArrow</Label>
        </BurgerContainer>
      </AppContainer>
    )
  }
}

export default App
