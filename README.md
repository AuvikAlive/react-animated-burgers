## Usage

Install the package

```
npm i -S react-animated-burgers styled-components
```

or

```
yarn add react-animated-burgers styled-components
```

Import the desired component, for example

```
import { HamburgerArrow } from 'react-animated-burgers'
```

Pass in isActive boolean prop

```
<HamburgerArrow isActive={this.state.isActive} />
```

Pass in toggleButton function prop

```
<HamburgerArrow isActive={this.state.isActive} toggleButton={this.toggleButton} />
```

Pass in buttonColor & barColor string to change the color of the button & bars

```
<HamburgerArrow isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
```

Pass in buttonWidth number prop to change the size of the button. The width of the button will take as width value in px the passed in prop, button height & other properties will be calculated based on buttonWidth. Default buttonWidth is 40

```
<HamburgerArrow buttonWidth={50} isActive={this.state.isActive} toggleButton={this.toggleButton} />
```

Pass in buttonStyle prop for style overrides

```
<HamburgerArrow buttonStyle={{ backgroundColor: "#FFBC67" }} isActive={this.state.isActive} toggleButton={this.toggleButton} />
```

If you prefer using classes pass in className

```
<HamburgerArrow className="my-styles" isActive={this.state.isActive} toggleButton={this.toggleButton} />
```

Complete example app component

```
import React, { Component } from 'react'
import { HamburgerArrow } from 'react-animated-burgers'

class App extends Component {
  state = {
    isActive: false
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
        <HamburgerArrow isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
    )
  }
}

export default App
```

## Acknowledgments

- Based on Tasty CSS-animated Hamburgers https://jonsuh.com/hamburgers by Jonathan Suh
