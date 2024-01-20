'use client'
import * as stylex from '@stylexjs/stylex'
import { useState, useEffect } from 'react'
import { colorTokens } from '../../styles/colorTokens.stylex'
import { Burger, Excavator } from '../SVGs'
type NavbarProps = {}

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    if (scrollY === 0) {
      setCollapsed(false)
    } else {
      setCollapsed(true)
    }
  }, [scrollY])

  return (
    <div {...stylex.props(styles.logoDiv)}>
      <div {...stylex.props(styles.base, collapsed && styles.slideOut)}>
        <div {...stylex.props(styles.logo)}>
          <Excavator
            height="100%"
            width="100%"
            fill={'rgba(255,255,255,0)'}
            stroke={'rgba(255,255,255,0.3)'}
          />
        </div>
        <div {...stylex.props(styles.navBase)}>
          <div {...stylex.props(styles.dividerWrapper)}>
            <div {...stylex.props(styles.divider)} />
          </div>
          <div {...stylex.props(styles.navItems)}>
            <span {...stylex.props(styles.navItem)}>About</span>
            <span {...stylex.props(styles.navItem)}>Our Work</span>
            <span {...stylex.props(styles.navItem)}>Careers</span>
            <span {...stylex.props(styles.navItem)}>Contact</span>
          </div>
        </div>
        <div {...stylex.props(styles.navBurger)}>
          <Burger stroke={'rgba(255,255,255,.5'} />
        </div>
      </div>
      <div {...stylex.props(styles.logoTagPosition)}>
        <span {...stylex.props(styles.logoTag)}>McClintock</span>
      </div>
    </div>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const NavbarTransition = stylex.keyframes({
  '0%': {
    transform: 'translateY(0%)',
  },
  '50%': {
    transform: 'translateY(-200%)',
  },
  '100%': {
    transform: 'translateY(-200%)',
    display: 'none',
  },
})

const styles = stylex.create({
  logoDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  logoTagPosition: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTag: {
    color: 'rgba(255,255,255,1)',
    fontSize: '.8rem',
    padding: '.1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    backgroundColor: colorTokens.primary_red_dark2,
    position: 'relative',
  },
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  slideOut: {
    animationName: NavbarTransition,
    animationDuration: '2s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  logo: {},
  navBase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  dividerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  navItems: {
    width: '100%',
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navItem: {
    backgroundColor: {
      default: colorTokens.white0,
      ':hover': colorTokens.primary_red_dark2,
    },
    color: {
      default: 'rgba(0,0,0,0.9)',
      ':hover': 'rgba(255,255,255,1)',
    },
    borderTopColor: 'rgba(255,255,255,0.3)',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '0 1rem',
    margin: '0 1rem',
    cursor: 'pointer',
  },
  navBurger: {
    display: {
      [MOBILE]: 'flex',
      [DESKTOP]: 'none',
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    marginRight: '20px',
  },
})

export default Navbar
