'use client'
import * as stylex from '@stylexjs/stylex'
import { useState, useEffect } from 'react'
import { colorTokens } from '../../styles/colorTokens.stylex'
import { Burger, Excavator, ExcavatorLogo } from '../SVGs'
import { Button } from '../UI/Button/Button'
import { Text } from '../UI/Text/Text'
import { usePathname } from 'next/navigation'
import { A } from '../UI/A/A'
import NameTag from './_components/NameTag'
import { hideDesktopTheme, hideMobileTheme, maxHeightNavbar } from '../UI/theme'
import { mobileDisplays } from '../UI/root.stylex'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

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
    <div
      {...stylex.props(
        collapsed && styles.slideOut,
        styles.navbar,
        !collapsed && styles.slideIn,
        !collapsed && styles.fadeIn,
        collapsed && styles.smallDelay
      )}
    >
      {/* Name Tag Icon */}
      <NameTag name={'McClintock Trucking & Excavating'} />
      {/* Permanent logo top right */}

      <A
        href="/"
        style={[
          styles._Root,
          collapsed && styles.fadeOut,
          styles.initialYFix,
          collapsed && styles.smallAccel,
        ]}
      >
        <ExcavatorLogo
          height="30%"
          width="30%"
          fill={'rgba(255,255,255,0)'}
          stroke={'rgba(255,255,255,0.8)'}
        />
      </A>
      {/* Navbar elemnts */}
      <div {...stylex.props(collapsed && styles.slideOut)}>
        <div {...stylex.props(styles.navBase, styles.displayDesktopOnly)}>
          <div {...stylex.props(styles.navItems)}>
            <A href="/">
              <span
                {...stylex.props(
                  styles.navItem,
                  pathname === '/' && styles.navItemActive
                )}
              >
                Home
              </span>
            </A>
            <A href="/about">
              <span
                {...stylex.props(
                  styles.navItem,
                  pathname.includes('/about') && styles.navItemActive
                )}
              >
                About
              </span>
            </A>
            <A href="/projects">
              <span
                {...stylex.props(
                  styles.navItem,
                  pathname.includes('/projects') && styles.navItemActive
                )}
              >
                Projects
              </span>
            </A>
            <A href="/careers">
              <span
                {...stylex.props(
                  styles.navItem,
                  pathname.includes('/careers') && styles.navItemActive
                )}
              >
                Careers
              </span>
            </A>
            <A href="/contact">
              <span
                {...stylex.props(
                  styles.navItem,
                  pathname.includes('/contact') && styles.navItemActive
                )}
              >
                Contact
              </span>
            </A>
          </div>
        </div>
      </div>

      <div
        {...stylex.props(
          hideDesktopTheme,
          collapsed && styles.slideOut,
          styles.displayMobileOnly
        )}
      >
        <Button
          onClick={handleCollapse}
          size={'md-compact'}
          style={styles.navBurger}
          hideMobile={false}
        >
          <Burger stroke={'rgba(255,255,255,1'} width="100%" height="100%" />
        </Button>
      </div>

      {/* Mobile Navbar only */}
      <div
        {...stylex.props(
          mobileDrawer && styles.fullScreenNav,
          styles.displayMobileOnly,
          !mobileDrawer && styles.hidden,
          overlay && styles.slideOut,
          maxHeightNavbar
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
          <A href="/" style={styles.drawerLink}>
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                Home
              </Text>
            </Button>
          </A>
          <A style={styles.drawerLink} href="/about">
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                About
              </Text>
            </Button>
          </A>
          <A style={styles.drawerLink} href="/projects">
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                Projects
              </Text>
            </Button>
          </A>
          <A style={styles.drawerLink} href="/services">
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                Services
              </Text>
            </Button>
          </A>
          <A style={styles.drawerLink} href="/careers">
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                Careers
              </Text>
            </Button>
          </A>
          <A href="/contact">
            <Button
              size={'lg'}
              style={styles.drawerNavItem}
              onClick={handleCollapse}
            >
              <Text variant="md" uppercase>
                Contact
              </Text>
            </Button>
          </A>
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

const fadeOutFrames = stylex.keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    display: 'none',
  },
})
const fadeInFrames = stylex.keyframes({
  '0%': {
    opacity: 0,
    display: 'none',
  },
  '100%': {
    opacity: 1,
  },
})

const styles = stylex.create({
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '130px',
    transition: 'all 0.2s ease-in-out',
    borderBottomColor: 'rgba(255,255,255,0.8)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  _Root: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  base: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'end',
    backgroundColor: 'transparent',
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
  fadeOut: {
    animationName: fadeOutFrames,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  navBase: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '130px',
    paddingRight: '1rem',
    width: 'auto',
    height: '100%',
    borderBottomColor: 'rgba(255,255,255,0.3)',
  },
  dividerWrapper: {
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
    width: '100sw%',
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopColor: 'rgba(255,255,255,0.8)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    padding: '0 3rem 6rem 3rem',
    margin: '0 1rem .0375rem 1rem',
  },
  navItemActive: {
    backgroundColor: colorTokens.primary_red_dark2,
    color: colorTokens.white0,
    transform: 'scale(1.1)',
    opacity: 1,
    transition: 'all 0.2s ease-in-out',
  },
  navItem: {
    backgroundColor: {
      default: 'rgba(255,255,255,0.3)',
      ':hover': colorTokens.primary_red_dark2,
    },
    color: {
      default: colorTokens.primary_red_dark2,
      ':hover': 'rgba(255,255,255,1)',
    },
    fontSize: '1.2rem',
    fontWeight: 600,
    padding: '.2rem 1rem',
    transform: 'rotateX(-5deg)',
    marginTop: '1rem',
    cursor: 'pointer',
    borderRadius: '3px',
    marginRight: '1rem',
    marginBottom: '.1rem',
    opacity: 0.8,
  },
  hidden: {
    display: 'none',
  },
  displayMobileOnly: {
    display: {
      [MOBILE]: 'flex',
      [DESKTOP]: 'none',
    },
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  displayDesktopOnly: {
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
  },
  navBurger: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0px',
    borderRadius: '0px',
    boxShadow: 'none',
    height: '80px',
    width: '80px',
    marginRight: '1rem',
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
    backgroundColor: colorTokens.black8,
    zIndex: 100,
    overflow: 'hidden',
    animationName: NavbarTransition2,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  drawerLink: {
    margin: '0 0 0.0375rem 0',
    padding: '.1rem 0',
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
    padding: '1rem',
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
  logoSpacing: {
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
  },
  initialYFix: {
    transform:
      'scaleX(1.1) scaleY(1.05) rotate3d(1,1,1,-15deg) translateY(-30px) translateX(3px)',
  },
  fadeIn: {
    animationName: fadeInFrames,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  smallDelay: {
    animationDelay: '.2s',
  },
  smallAccel: {
    animationDelay: '-0.2s',
  },
})

export default Navbar
