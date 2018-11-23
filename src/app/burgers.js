import HamburgerArrow from 'components/HamburgerArrow'
import HamburgerArrowReverse from 'components/HamburgerArrowReverse'
import HamburgerArrowAlt from 'components/HamburgerArrowAlt'
import HamburgerArrowAltReverse from 'components/HamburgerArrowAltReverse'
import HamburgerArrowTurn from 'components/HamburgerArrowTurn'
import HamburgerArrowTurnReverse from 'components/HamburgerArrowTurnReverse'
import HamburgerBoring from 'components/HamburgerBoring'
import HamburgerCollapse from 'components/HamburgerCollapse'
import HamburgerCollapseReverse from 'components/HamburgerCollapseReverse'
import HamburgerElastic from 'components/HamburgerElastic'
import HamburgerElasticReverse from 'components/HamburgerElasticReverse'
import HamburgerEmphatic from 'components/HamburgerEmphatic'
import HamburgerEmphaticReverse from 'components/HamburgerEmphaticReverse'
import HamburgerMinus from 'components/HamburgerMinus'
import HamburgerSlider from 'components/HamburgerSlider'
import HamburgerSliderReverse from 'components/HamburgerSliderReverse'
import HamburgerSpin from 'components/HamburgerSpin'
import HamburgerSpinReverse from 'components/HamburgerSpinReverse'
import HamburgerSpring from 'components/HamburgerSpring'
import HamburgerSqueeze from 'components/HamburgerSqueeze'
import HamburgerStand from 'components/HamburgerStand'
import HamburgerStandReverse from 'components/HamburgerStandReverse'
import HamburgerThreeDX from 'components/HamburgerThreeDX'
import HamburgerThreeDXReverse from 'components/HamburgerThreeDXReverse'
import HamburgerThreeDY from 'components/HamburgerThreeDY'
import HamburgerThreeDYReverse from 'components/HamburgerThreeDYReverse'
import HamburgerThreeDXY from 'components/HamburgerThreeDXY'
import HamburgerThreeDXYReverse from 'components/HamburgerThreeDXYReverse'
import HamburgerVortex from 'components/HamburgerVortex'
import HamburgerVortexReverse from 'components/HamburgerVortexReverse'

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
  burger.barColor = 'white'

  if (index % 5 === 0) {
    burger.buttonColor = '#AC6C82'
  } else if (index % 5 === 1) {
    burger.buttonColor = '#685C79'
  } else if (index % 5 === 2) {
    burger.buttonColor = '#DA727E'
  } else if (index % 5 === 3) {
    burger.buttonColor = '#FFBC67'
  } else {
    burger.buttonColor = '#455C7B'
  }

  return burger
})
