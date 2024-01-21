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
          <Text variant="xl" uppercase style={[styles.heroTitle]}>
            Certified
          </Text>
          <Text variant="xl" uppercase style={[styles.heroTitle]}>
            Professional
          </Text>
          <Text variant="xl" uppercase style={[styles.heroTitle]}>
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
      <div {...stylex.props(styles.base2)}>
        <div {...stylex.props(styles.flexWrap(landingBackDrop.src))}>
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

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
  },
  img: (imgSrc, imgHighResSrc) => ({
    width: '100vw',
    objectPosition: 'center',
    backgroundPositionX: 'center',
    backgroundPositionY: 'bottom',
    minHeight: {
      [DESKTOP]: '1000px',
      [MOBILE]: '800px',
    },
    backgroundImage: {
      [DESKTOP]: `url(${imgHighResSrc})`,
      [MOBILE]: `url(${imgSrc})`,
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  }),
  hero: {
    width: '100%',
    minWidth: '80vw',
    paddingTop: '50px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(15deg, rgba(0,0,0,0.8), rgba(0,0,0,0.0))`,
  },
  heroTitle: {
    width: '100%',
    textAlign: 'left',
    maxWidth: '1200px',
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
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(55,55,55,0.8)',
    backgroundImage: `url(${imgSrc})`,
    backgroundPositionY: 'bottom',
    backgroundBlendMode: 'multiply',
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
