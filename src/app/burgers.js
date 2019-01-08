import HamburgerArrow from 'lib/components/HamburgerArrow'
import HamburgerArrowReverse from 'lib/components/HamburgerArrowReverse'
import HamburgerArrowAlt from 'lib/components/HamburgerArrowAlt'
import HamburgerArrowAltReverse from 'lib/components/HamburgerArrowAltReverse'
import HamburgerArrowTurn from 'lib/components/HamburgerArrowTurn'
import HamburgerArrowTurnReverse from 'lib/components/HamburgerArrowTurnReverse'
import HamburgerBoring from 'lib/components/HamburgerBoring'
import HamburgerCollapse from 'lib/components/HamburgerCollapse'
import HamburgerCollapseReverse from 'lib/components/HamburgerCollapseReverse'
import HamburgerElastic from 'lib/components/HamburgerElastic'
import HamburgerElasticReverse from 'lib/components/HamburgerElasticReverse'
import HamburgerEmphatic from 'lib/components/HamburgerEmphatic'
import HamburgerEmphaticReverse from 'lib/components/HamburgerEmphaticReverse'
import HamburgerMinus from 'lib/components/HamburgerMinus'
import HamburgerSlider from 'lib/components/HamburgerSlider'
import HamburgerSliderReverse from 'lib/components/HamburgerSliderReverse'
import HamburgerSpin from 'lib/components/HamburgerSpin'
import HamburgerSpinReverse from 'lib/components/HamburgerSpinReverse'
import HamburgerSpring from 'lib/components/HamburgerSpring'
import HamburgerSqueeze from 'lib/components/HamburgerSqueeze'
import HamburgerStand from 'lib/components/HamburgerStand'
import HamburgerStandReverse from 'lib/components/HamburgerStandReverse'
import HamburgerThreeDX from 'lib/components/HamburgerThreeDX'
import HamburgerThreeDXReverse from 'lib/components/HamburgerThreeDXReverse'
import HamburgerThreeDY from 'lib/components/HamburgerThreeDY'
import HamburgerThreeDYReverse from 'lib/components/HamburgerThreeDYReverse'
import HamburgerThreeDXY from 'lib/components/HamburgerThreeDXY'
import HamburgerThreeDXYReverse from 'lib/components/HamburgerThreeDXYReverse'
import HamburgerVortex from 'lib/components/HamburgerVortex'
import HamburgerVortexReverse from 'lib/components/HamburgerVortexReverse'

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
