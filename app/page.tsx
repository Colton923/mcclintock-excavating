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
import { A } from '@/components/UI'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.img(excavatorImg.src, excavatorImgHighRes.src))}>
        <div {...stylex.props(styles.hero)}>
          {/* //@ts-ignore */}
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Certified
          </Text>
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Professional
          </Text>
          <Text variant="xl" uppercase style={styles.heroTitle as any}>
            Trustworthy
          </Text>
          <div {...stylex.props(styles.heroButtons)}>
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
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.flexWrap(landingBackDrop.src))} />
      <div {...stylex.props(styles.base2)}>
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
          <div {...stylex.props(styles.spaceFlex)}>
            <Text variant="sm" uppercase style={styles.flexText}>
              Quality service.
            </Text>
            <Text variant="sm" uppercase style={styles.flexText}>
              Satisfied customers.
            </Text>
            <Text variant="sm" uppercase style={styles.flexText}>
              Clean work.
            </Text>
          </div>
          <A href="/about">
            <Button size="lg-compact">
              <Text variant="sm" uppercase>
                About Us
              </Text>
            </Button>
          </A>
        </div>
      </div>
      <div {...stylex.props(styles.base3)}>
        <div {...stylex.props(styles.flexWrapCardImgs)}>
          <Unform translatedX={-100} translatedY={200}>
            <div {...stylex.props(styles.cardImg1(jobsite1.src))} />
          </Unform>
          <Unform translatedX={200} translatedY={0}>
            <div {...stylex.props(styles.cardImg2(jobsite2.src))} />
          </Unform>
          <Unform translatedX={-100} translatedY={-200}>
            <div {...stylex.props(styles.cardImg3(jobsite3.src))} />
          </Unform>
        </div>
      </div>
      <div {...stylex.props(styles.base4)}>
        <ExcavatorLogo
          width={'50%'}
          height={'50%'}
          stroke={colorTokens.white0}
          fill={colorTokens.primary_red_dark3}
        />
      </div>
    </div>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    display: 'flex',
    position: 'absolute',
    top: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  base2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  base3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  flexWrapCardImgs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxWidth: '1200px',
  },
  cardImg1: (imgSrc) => ({
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
    transform: 'translate(-100px, 200px)',
    zIndex: 5,
  }),
  cardImg2: (imgSrc) => ({
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
    transform: 'translate(200px, 0px)',
    zIndex: 4,
  }),
  cardImg3: (imgSrc) => ({
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
    transform: 'translate(-100px, -200px)',
    zIndex: 2,
  }),
  base4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
