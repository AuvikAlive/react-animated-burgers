import { createElement } from 'react'
import { StyledLabel } from './StyledLabel'
import { StyledBurgerContainer } from './StyledBurgerContainer'
import { burgers } from './burgers'

export const renderBurgers = parent => {
  return burgers.map(burger => {
    const burgerName = burger.name

    const BurgerComponent = createElement(burger.burgerComponent, {
      key: burgerName,
      isActive: parent.state[`isActive${burgerName}`],
      toggleButton: parent.toggleButton(burgerName),
      buttonColor: burger.buttonColor,
      barColor: burger.barColor,
      buttonStyle: burger.buttonStyle,
      className: burger.className,
    })

    const LabelComponent = createElement(
      StyledLabel,
      { key: `Hamburger${burgerName}` },
      `Hamburger${burgerName}`
    )

    return createElement(StyledBurgerContainer, { key: burgerName }, [
      BurgerComponent,
      LabelComponent,
    ])
  })
}
