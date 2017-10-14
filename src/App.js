import React, { Component } from 'react'
import styled from 'styled-components'

import AppContainer from './AppContainer'

import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'
import HamburgerThreeDY from 'components/HamburgerThreeDY'
import HamburgerThreeDXY from 'components/HamburgerThreeDXY'
import HamburgerArrow from 'components/HamburgerArrow'
import HamburgerArrowAlt from 'components/HamburgerArrowAlt'
import HamburgerArrowTurn from 'components/HamburgerArrowTurn'
import HamburgerBoring from 'components/HamburgerBoring'

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
      isActiveArrow: false,
      isActiveArrowAlt: false,
      isActiveArrowTurn: false,
      isActiveBoring: false
    }

    this.toggleButtonThreeDX = this.toggleButtonThreeDX.bind(this)
    this.toggleButtonThreeDY = this.toggleButtonThreeDY.bind(this)
    this.toggleButtonThreeDXY = this.toggleButtonThreeDXY.bind(this)
    this.toggleButtonCollapse = this.toggleButtonCollapse.bind(this)
    this.toggleButtonArrow = this.toggleButtonArrow.bind(this)
    this.toggleButtonArrowAlt = this.toggleButtonArrowAlt.bind(this)
    this.toggleButtonArrowTurn = this.toggleButtonArrowTurn.bind(this)
    this.toggleButtonBoring = this.toggleButtonBoring.bind(this)
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

  toggleButtonArrowAlt() {
    this.setState({
      isActiveArrowAlt: !this.state.isActiveArrowAlt
    })
  }

  toggleButtonArrowTurn() {
    this.setState({
      isActiveArrowTurn: !this.state.isActiveArrowTurn
    })
  }

  toggleButtonBoring() {
    this.setState({
      isActiveBoring: !this.state.isActiveBoring
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

        <BurgerContainer>
          <HamburgerArrowAlt
            isActive={this.state.isActiveArrowAlt}
            toggleButton={this.toggleButtonArrowAlt}
            buttonColor="#FFBC67"
            barColor="white"
          />
          <Label>HamburgerArrowAlt</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerArrowTurn
            isActive={this.state.isActiveArrowTurn}
            toggleButton={this.toggleButtonArrowTurn}
            buttonColor="#DA727E"
            barColor="white"
          />
          <Label>HamburgerArrowTurn</Label>
        </BurgerContainer>

        <BurgerContainer>
          <HamburgerBoring
            isActive={this.state.isActiveBoring}
            toggleButton={this.toggleButtonBoring}
            buttonColor="#AC6C82"
            barColor="white"
          />
          <Label>HamburgerBoring</Label>
        </BurgerContainer>
      </AppContainer>
    )
  }
}

export default App
