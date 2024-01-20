'use client'
import * as stylex from '@stylexjs/stylex'
import { useState, useEffect } from 'react'
import { colorTokens } from '../../styles/colorTokens.stylex'
import { Burger, Excavator } from '../SVGs'
import { Button } from '../UI/Button/Button'
import { Text } from '../UI/Text/Text'
type NavbarProps = {}

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  const [overlay, setOverlay] = useState(false)

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
    if (mobileDrawer) {
      setOverlay(true)
      setTimeout(() => {
        setMobileDrawer(false)
      }, 1000)
    } else {
      setMobileDrawer(true)
      setOverlay(false)
    }
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
        <div {...stylex.props(styles.displayMobileOnly)}>
          <Button
            onClick={handleCollapse}
            size={'md-compact'}
            style={styles.navBurger}
          >
            <Burger stroke={'rgba(255,255,255,.5'} width="100%" height="100%" />
          </Button>
        </div>
      </div>
      <div {...stylex.props(styles.logoTagPosition)}>
        <Text variant="xxs" uppercase style={styles.logoTagPosition}>
          McClintock
        </Text>
      </div>
      <div
        {...stylex.props(
          mobileDrawer && styles.fullScreenNav,
          styles.displayMobileOnly,
          !mobileDrawer && styles.hidden,
          overlay && styles.slideOut
        )}
      >
        <div {...stylex.props(styles.drawerNavItems)}>
          <div {...stylex.props(styles.closeWrapper)}>
            <Button onClick={handleCollapse} size={'xs-compact'}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                {...stylex.props(styles.close)}
              >
                <path
                  d="M19 6L6 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L19 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
          <Button size={'lg'} style={styles.drawerNavItem}>
            <Text variant="md" uppercase>
              About
            </Text>
          </Button>
          <Button size={'lg'} style={styles.drawerNavItem}>
            <Text variant="md" uppercase>
              Projects
            </Text>
          </Button>
          <Button size={'lg'} style={styles.drawerNavItem}>
            <Text variant="md" uppercase>
              Careers
            </Text>
          </Button>
          <Button size={'lg'} style={styles.drawerNavItem}>
            <Text variant="md" uppercase>
              Contact
            </Text>
          </Button>
        </div>
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
  '100%': {
    transform: 'translateY(-200%)',
    display: 'none',
  },
})

const NavbarTransition2 = stylex.keyframes({
  '0%': {
    transform: 'translateY(-200%)',
    display: 'none',
  },
  '100%': {
    transform: 'translateY(0%)',
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
    animationName: NavbarTransition2,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  slideIn: {
    animationName: NavbarTransition2,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
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
  hidden: {
    display: 'none',
  },
  displayMobileOnly: {
    display: {
      [MOBILE]: 'flex',
      [DESKTOP]: 'none',
    },
  },
  navBurger: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0px',
    borderRadius: '0px',
    boxShadow: 'none',
  },
  fullScreenNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colorTokens.white0,
    zIndex: 100,
    overflow: 'hidden',
    animationName: NavbarTransition2,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  drawerNavItems: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerNavItem: {
    margin: '1rem',
    cursor: 'pointer',
  },
  closeWrapper: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  close: {
    fill: {
      default: 'rgba(0,0,0,0.9)',
      ':hover': 'rgba(255,255,255,1)',
    },
  },
})

export default Navbar
