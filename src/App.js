import React, { Component } from 'react'

import AppContainer from './AppContainer'

import renderBurgerList from './burgers'

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
      isActiveBoring: false,
      isActiveElastic: false,
      isActiveEmphatic: false,
      isActiveMinus: false,
      isActiveSlider: false,
      isActiveSpin: false
    }

    this.toggleButtonThreeDX = this.toggleButtonThreeDX.bind(this)
    this.toggleButtonThreeDY = this.toggleButtonThreeDY.bind(this)
    this.toggleButtonThreeDXY = this.toggleButtonThreeDXY.bind(this)
    this.toggleButtonCollapse = this.toggleButtonCollapse.bind(this)
    this.toggleButtonArrow = this.toggleButtonArrow.bind(this)
    this.toggleButtonArrowAlt = this.toggleButtonArrowAlt.bind(this)
    this.toggleButtonArrowTurn = this.toggleButtonArrowTurn.bind(this)
    this.toggleButtonBoring = this.toggleButtonBoring.bind(this)
    this.toggleButtonElastic = this.toggleButtonElastic.bind(this)
    this.toggleButtonEmphatic = this.toggleButtonEmphatic.bind(this)
    this.toggleButtonMinus = this.toggleButtonMinus.bind(this)
    this.toggleButtonSlider = this.toggleButtonSlider.bind(this)
    this.toggleButtonSpin = this.toggleButtonSpin.bind(this)
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

  toggleButtonElastic() {
    this.setState({
      isActiveElastic: !this.state.isActiveElastic
    })
  }

  toggleButtonEmphatic() {
    this.setState({
      isActiveEmphatic: !this.state.isActiveEmphatic
    })
  }

  toggleButtonMinus() {
    this.setState({
      isActiveMinus: !this.state.isActiveMinus
    })
  }

  toggleButtonSlider() {
    this.setState({
      isActiveSlider: !this.state.isActiveSlider
    })
  }

  toggleButtonSpin() {
    this.setState({
      isActiveSpin: !this.state.isActiveSpin
    })
  }

  render() {
    return <AppContainer>{renderBurgerList(this)}</AppContainer>
  }
}

export default App
