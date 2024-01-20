import { ExcavatorLogo } from '@/components/SVGs'
import { colorTokens } from '../styles/colorTokens.stylex'
import excavatorImg from '../public/images/excavator.jpg'
import excavatorImgHighRes from '../public/images/excavator_highres.jpg'
import * as stylex from '@stylexjs/stylex'
import landingBackDrop from '../public/images/landingBackDrop.jpg'
import jobsite1 from '../public/images/jobsite1.jpg'
import jobsite2 from '../public/images/jobsite2.jpg'
import jobsite3 from '../public/images/jobsite3.jpg'

import Unform from '@/components/UX/Intersection/Unform'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.img(excavatorImg.src, excavatorImgHighRes.src))}>
        <div {...stylex.props(styles.hero)}>
          <span {...stylex.props(styles.heroTitle)}>Certified</span>
          <span {...stylex.props(styles.heroTitle)}>Professional</span>
          <span {...stylex.props(styles.heroTitle)}>Trustworthy</span>
          <div {...stylex.props(styles.heroButtons)}>
            <button {...stylex.props(styles.heroButton)}>Contact Us</button>
            <button {...stylex.props(styles.heroButton)}>Our Work</button>
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.base2)}>
        <div {...stylex.props(styles.flexWrap(landingBackDrop.src))}>
          <div {...stylex.props(styles.flexItem)}>
            <span {...stylex.props(styles.flexTitle)}>
              We love to dig, and we do it well.
            </span>
          </div>
          <div {...stylex.props(styles.flexItem)}>
            <span {...stylex.props(styles.description)}>
              Plumbing and Excavation is a family owned and operated business.
              Quality service. Satisfied customers. Jobs done right.
            </span>
            <button {...stylex.props(styles.heroButton)}>About Us</button>
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
    color: colorTokens.white0,
    width: '100%',
    height: {
      [DESKTOP]: '80px',
      [MOBILE]: '60px',
    },
    paddingLeft: '10px',
    fontWeight: 900,
    fontSize: {
      [DESKTOP]: '5rem',
      [MOBILE]: '2rem',
    },
    textIndent: {
      [DESKTOP]: '100px',
      [MOBILE]: '10px',
    },
    textAlign: 'left',
    textTransform: 'uppercase',
    textShadow: `
    1px 1px 0px rgba(0,0,0,1),
    -1px -1px 0px rgba(0,0,0,1),
    -1px 1px 0px rgba(0,0,0,1),
    1px -1px 0px rgba(0,0,0,1)`,
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
  },
  heroButton: {
    width: '33%',
    maxWidth: '180px',
    height: '40px',
    backgroundColor: {
      ':hover': colorTokens.primary_red_dark3,
      ':active': colorTokens.primary_red_dark3,
      default: colorTokens.primary_red_dark2,
    },
    borderColor: colorTokens.primary_red_dark2,
    borderStyle: 'solid',
    borderWidth: '1px',
    margin: '15px 10px 0px 10px',
    color: colorTokens.white0,
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    textShadow: `
    1px 1px 0px rgba(0,0,0,1),
    -1px -1px 0px rgba(0,0,0,1),
    -1px 1px 0px rgba(0,0,0,1),
    1px -1px 0px rgba(0,0,0,1)
    `,
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
  flexTitle: {
    color: colorTokens.white0,
    maxWidth: '300px',
    fontSize: '2rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    textShadow: `
    1px 1px 0px rgba(0,0,0,1),
    -1px -1px 0px rgba(0,0,0,1),
    -1px 1px 0px rgba(0,0,0,1),
    1px -1px 0px rgba(0,0,0,1)
    `,
  },
  description: {
    color: colorTokens.white0,
    fontSize: '1.8rem',
    fontWeight: 400,
    maxWidth: '300px',
    textShadow: `
    1px 1px 0px rgba(0,0,0,1),
    -1px -1px 0px rgba(0,0,0,1),
    -1px 1px 0px rgba(0,0,0,1),
    1px -1px 0px rgba(0,0,0,1)
    `,
  },
  base3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
  },
  flexWrapCardImgs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    overflowX: 'hidden',
  },
  cardImg1: (imgSrc) => ({
    width: {
      [DESKTOP]: '33%',
      [MOBILE]: '100%',
    },
    minHeight: '500px',
    maxWidth: '400px',
    minWidth: '300px',
    margin: '1rem 0',
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
    width: {
      [DESKTOP]: '33%',
      [MOBILE]: '100%',
    },
    minHeight: '500px',
    maxWidth: '400px',
    minWidth: '300px',
    margin: '1rem 0',
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
    width: {
      [DESKTOP]: '33%',
      [MOBILE]: '100%',
    },
    minHeight: '500px',
    maxWidth: '400px',
    minWidth: '300px',
    margin: '1rem 0',
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
