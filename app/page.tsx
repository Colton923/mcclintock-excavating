import { ExcavatorLogo } from '@/components/SVGs'
import { colorTokens } from '../styles/colorTokens.stylex'
import excavatorImg from '../public/images/excavator.jpg'
import excavatorImgHighRes from '../public/images/excavator_highres.jpg'
import * as stylex from '@stylexjs/stylex'
import landingBackDrop from '../public/images/landingBackDrop.jpg'
import jobsite1 from '../public/images/jobsite1.jpg'
import jobsite2 from '../public/images/jobsite2.jpg'
import jobsite3 from '../public/images/jobsite3.jpg'
import { Button } from '@/components/UI/Button/Button'

import Unform from '@/components/UX/Intersection/Unform'
import { Text } from '@/components/UI/Text/Text'
import { A, Center, Flex } from '@/components/UI'

export default function Page() {
  return (
    <Flex variant="column" justify="flex-start" align="center" style={styles.base}>
      <div {...stylex.props(styles.img(excavatorImg.src, excavatorImgHighRes.src))}>
        <Flex variant="column" justify="flex-end" align="center" style={styles.hero}>
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Certified
          </Text>
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Professional
          </Text>
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Trustworthy
          </Text>
          <Flex
            variant="row"
            justify="center"
            align="center"
            style={styles.heroButtons}
          >
            <A href="/contact">
              <Button size="lg-compact">
                <Text variant="sm" uppercase>
                  Contact Us
                </Text>
              </Button>
            </A>
            <A href="/projects">
              <Button size="lg-compact">
                <Text variant="sm" uppercase>
                  Projects
                </Text>
              </Button>
            </A>
          </Flex>
        </Flex>
      </div>
      <div {...stylex.props(styles.flexWrap(landingBackDrop.src))} />
      <Flex
        variant="column"
        align="center"
        justify="flex-start"
        style={styles.base2}
      >
        <div {...stylex.props(styles.flexItem)}>
          <Text variant="lg" style={styles.flexText}>
            We love to dig, and we do it well.
          </Text>
        </div>
        <div {...stylex.props(styles.flexItem)}>
          <Text variant="md" style={styles.flexText}>
            We are family owned and operated. Expert tradesmen serving the Quad
            Cities in plumbing, excavating and trucking.
          </Text>
          <Flex
            variant="row"
            justify="space-evenly"
            align="center"
            style={styles.spaceFlex}
          >
            <Text variant="sm" uppercase style={styles.flexText}>
              Quality service.
            </Text>
            <Text variant="sm" uppercase style={styles.flexText}>
              Satisfied customers.
            </Text>
            <Text variant="sm" uppercase style={styles.flexText}>
              Clean work.
            </Text>
          </Flex>
          <A href="/about">
            <Button size="lg-compact">
              <Text variant="sm" uppercase>
                About Us
              </Text>
            </Button>
          </A>
        </div>
      </Flex>
      <Flex variant="column" justify="center" align="center">
        <Flex
          variant="row"
          wrap="wrap"
          justify="space-evenly"
          align="center"
          style={styles.flexWrapCardImgs}
        >
          <Unform translatedX={-100} translatedY={200}>
            <div {...stylex.props(styles.cardImg(jobsite1.src), styles.cardImg1)} />
          </Unform>
          <Unform translatedX={200} translatedY={0}>
            <div {...stylex.props(styles.cardImg(jobsite2.src), styles.cardImg2)} />
          </Unform>
          <Unform translatedX={-100} translatedY={-200}>
            <div {...stylex.props(styles.cardImg(jobsite3.src), styles.cardImg3)} />
          </Unform>
        </Flex>
      </Flex>
      <Center miw="300px" mih="400px">
        <ExcavatorLogo
          width={'50%'}
          height={'50%'}
          stroke={colorTokens.white0}
          fill={colorTokens.primary_red_dark3}
        />
      </Center>
    </Flex>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const slam = stylex.keyframes({
  '0%': {
    transform: 'translate(0, 0)',
    opacity: 0,
    scale: '1',
  },
  '90%': {
    transform: 'translate(0, 1px)',
    scale: '1.05',
  },
  '100%': {
    transform: 'translate(0, 0)',
    opacity: 1,
    scale: '1',
  },
})

const styles = stylex.create({
  base: {
    minHeight: '100vh',
  },
  img: (imgSrc, imgHighResSrc) => ({
    objectPosition: 'center',
    backgroundPosition: 'top',
    backgroundBlendMode: 'multiply',
    width: '100vw',
    minHeight: '100svh',
    backgroundImage: {
      [DESKTOP]: `url(${imgHighResSrc})`,
      [MOBILE]: `url(${imgSrc})`,
    },
    backgroundSize: {
      [DESKTOP]: 'contain',
      [MOBILE]: 'cover',
    },
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  hero: {
    height: 'auto',
    position: 'absolute',
    top: 'auto',
    backgroundImage: `linear-gradient(15deg, rgba(0,0,0,0.8), rgba(0,0,0,0.0))`,
    textAlign: 'left',
    width: '100vw',
  },
  heroTitle: {
    transform: 'translate(0, -1px)',
    animationDelay: {
      default: '0.1s',
      ':nth-child(1)': 'calc(0.5s * 1)',
      ':nth-child(2)': 'calc(0.7s * 2)',
      ':nth-child(3)': 'calc(0.8s * 3)',
    },
    animationName: slam,
    animationDuration: '1s',
    animationIterationCount: '1',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    opacity: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    right: 'auto',
    textAlign: 'left',
    maxWidth: '1200px',
    paddingLeft: '1rem',
  },
  heroButtons: {
    width: '100%',
    marginBottom: '20px',
  },
  base2: {
    minHeight: '100vh',
    width: '100vw',
  },
  flexWrap: (imgSrc) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(55,55,55,0.8)',
    backgroundImage: `url(${imgSrc})`,
    backgroundPositionY: 'bottom',
    zIndex: '-1',
    backgroundBlendMode: 'multiply',
    width: '100vw',
    height: '200svh',
    position: 'absolute',
    top: '80svh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
  flexItem: {
    width: {
      [DESKTOP]: '50%',
      [MOBILE]: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    minHeight: '400px',
  },
  flexText: {
    maxWidth: '400px',
  },
  spaceFlex: {
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  flexWrapCardImgs: {
    maxWidth: '1200px',
    overflow: 'hidden',
  },
  cardImg: (imgSrc) => ({
    display: 'flex',
    width: {
      [DESKTOP]: '33%',
      [MOBILE]: '100%',
    },
    minHeight: '500px',
    maxWidth: '400px',
    minWidth: '300px',
    marginTop: '1rem',
    marginRight: {
      [DESKTOP]: '1rem',
      [MOBILE]: '0',
    },
    marginLeft: {
      [DESKTOP]: '1rem',
      [MOBILE]: '0',
    },
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  }),
  cardImg1: {
    zIndex: 5,
    transform: 'translate(-100px, 200px)',
  },
  cardImg2: {
    transform: 'translate(200px, 0px)',
    zIndex: 4,
  },
  cardImg3: {
    transform: 'translate(-100px, -200px)',
    zIndex: 2,
  },
})
