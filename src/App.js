import React, { Component } from 'react'
import './App.css'

import HamburgerCollapse from 'components/HamburgerCollapse'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <HamburgerCollapse
        isActive={this.state.isActive}
        toggleButton={this.toggleButton}
      />
    )
  }
}

export default App
