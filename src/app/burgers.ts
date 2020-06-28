import {
  HamburgerArrow,
  HamburgerArrowReverse,
  HamburgerArrowAlt,
  HamburgerArrowAltReverse,
  HamburgerArrowTurn,
  HamburgerArrowTurnReverse,
  HamburgerBoring,
  HamburgerCollapse,
  HamburgerCollapseReverse,
  HamburgerElastic,
  HamburgerElasticReverse,
  HamburgerEmphatic,
  HamburgerEmphaticReverse,
  HamburgerMinus,
  HamburgerSlider,
  HamburgerSliderReverse,
  HamburgerSpin,
  HamburgerSpinReverse,
  HamburgerSpring,
  HamburgerSqueeze,
  HamburgerStand,
  HamburgerStandReverse,
  HamburgerThreeDX,
  HamburgerThreeDXReverse,
  HamburgerThreeDY,
  HamburgerThreeDYReverse,
  HamburgerThreeDXY,
  HamburgerThreeDXYReverse,
  HamburgerVortex,
  HamburgerVortexReverse,
} from '../lib'

const burgersBase = [
  {
    Component: HamburgerArrow,
    name: 'Arrow',
  },
  {
    Component: HamburgerArrowReverse,
    name: 'ArrowReverse',
  },
  {
    Component: HamburgerArrowAlt,
    name: 'ArrowAlt',
  },
  {
    Component: HamburgerArrowAltReverse,
    name: 'ArrowAltReverse',
  },
  {
    Component: HamburgerArrowTurn,
    name: 'ArrowTurn',
  },
  {
    Component: HamburgerArrowTurnReverse,
    name: 'ArrowTurnReverse',
  },
  {
    Component: HamburgerBoring,
    name: 'Boring',
  },
  {
    Component: HamburgerCollapse,
    name: 'Collapse',
  },
  {
    Component: HamburgerCollapseReverse,
    name: 'CollapseReverse',
  },
  {
    Component: HamburgerElastic,
    name: 'Elastic',
  },
  {
    Component: HamburgerElasticReverse,
    name: 'ElasticReverse',
  },
  {
    Component: HamburgerEmphatic,
    name: 'Emphatic',
  },
  {
    Component: HamburgerEmphaticReverse,
    name: 'EmphaticReverse',
  },
  {
    Component: HamburgerMinus,
    name: 'Minus',
  },
  {
    Component: HamburgerSlider,
    name: 'Slider',
  },
  {
    Component: HamburgerSliderReverse,
    name: 'SliderReverse',
  },
  {
    Component: HamburgerSpin,
    name: 'Spin',
  },
  {
    Component: HamburgerSpinReverse,
    name: 'SpinReverse',
  },
  {
    Component: HamburgerSpring,
    name: 'Spring',
  },
  {
    Component: HamburgerSqueeze,
    name: 'Squeeze',
  },
  {
    Component: HamburgerStand,
    name: 'Stand',
  },
  {
    Component: HamburgerStandReverse,
    name: 'StandReverse',
  },
  {
    Component: HamburgerThreeDX,
    name: 'ThreeDX',
  },
  {
    Component: HamburgerThreeDXReverse,
    name: 'ThreeDXReverse',
  },
  {
    Component: HamburgerThreeDY,
    name: 'ThreeDY',
  },
  {
    Component: HamburgerThreeDYReverse,
    name: 'ThreeDYReverse',
  },
  {
    Component: HamburgerThreeDXY,
    name: 'ThreeDXY',
  },
  {
    Component: HamburgerThreeDXYReverse,
    name: 'ThreeDXYReverse',
  },
  {
    Component: HamburgerVortex,
    name: 'Vortex',
  },
  {
    Component: HamburgerVortexReverse,
    name: 'VortexReverse',
  },
]

export const burgers = burgersBase.map((burger, index) => {
  let buttonColor = '#455C7B'

  if (index % 5 === 0) {
    buttonColor = '#AC6C82'
  } else if (index % 5 === 1) {
    buttonColor = '#685C79'
  } else if (index % 5 === 2) {
    buttonColor = '#DA727E'
  } else if (index % 5 === 3) {
    buttonColor = '#FFBC67'
  }

  return { ...burger, barColor: 'white', buttonColor }
})
