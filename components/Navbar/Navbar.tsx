'use client'
import * as stylex from '@stylexjs/stylex'
import { useState, useEffect } from 'react'
import { colorTokens } from '../../styles/colorTokens.stylex'
import { Burger, ExcavatorLogo } from '../SVGs'
import { Button } from '../UI/Button/Button'
import { Text } from '../UI/Text/Text'
import { usePathname } from 'next/navigation'
import { A } from '../UI/A/A'
import NameTag from './_components/NameTag'
import { Flex } from '../UI'
import { routes } from './routes'
import type { TRoute } from './routes'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const pathname = usePathname()

  const disableScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const enableScroll = () => {
    document.body.style.overflow = 'auto'
  }

  const handleCollapse = () => {
    if (mobileDrawer) {
      setOverlay(true)
      enableScroll()
      setTimeout(() => {
        setMobileDrawer(false)
      }, 1000)
    } else {
      disableScroll()
      setMobileDrawer(true)
      setOverlay(false)
    }
  }

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

  useEffect(() => {
    if (scrollY === 0) {
      setCollapsed(false)
    } else {
      setCollapsed(true)
    }
  }, [scrollY])

  const DrawerItem = ({ href, label }: TRoute) => {
    return (
      <A href={href} style={styles.drawerLink}>
        <Button size={'lg'} style={styles.drawerNavItem} onClick={handleCollapse}>
          <Text variant="md" uppercase>
            {label}
          </Text>
        </Button>
      </A>
    )
  }

  const DesktopNavItems = ({ href, label }: TRoute) => {
    return (
      <A href={href}>
        <span
          {...stylex.props(
            styles.navItem,
            pathname === href && styles.navItemActive
          )}
        >
          {label}
        </span>
      </A>
    )
  }

  return (
    <div {...stylex.props(styles.root, collapsed && styles.slideOut)}>
      <NameTag name={'McClintock Trucking & Excavating'} />
      <A href="/" style={styles.initialYFix}>
        <ExcavatorLogo
          height="30%"
          width="30%"
          fill={'rgba(255,255,255,0)'}
          stroke={'rgba(255,255,255,0.8)'}
        />
      </A>
      <div {...stylex.props(styles.displayDesktopOnly)}>
        <Flex
          variant="row"
          justify="flex-end"
          align="center"
          wrap="wrap"
          style={styles.navItems}
        >
          {routes.map((route, index) => {
            return <DesktopNavItems key={route.href} {...route} />
          })}
        </Flex>
      </div>
      <div {...stylex.props(styles.displayMobileOnly)}>
        <Button
          onClick={handleCollapse}
          size={'md-compact'}
          style={styles.navBurger}
          hideMobile={false}
        >
          <Burger stroke={'rgba(255,255,255,1'} width="100%" height="100%" />
        </Button>
      </div>
      <div
        {...stylex.props(
          mobileDrawer && styles.fullScreenNav,
          !mobileDrawer && styles.hidden,
          overlay && styles.slideOut
        )}
      >
        <Flex variant="column" justify="center" align="center">
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
          {routes.map((route) => {
            return <DrawerItem key={route.href} {...route} />
          })}
        </Flex>
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
  root: {
    zIndex: 100,
    position: 'fixed',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    minWidth: '100vw',
    height: '130px',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(255,255,255,0.8)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  navItems: {
    borderTopColor: 'rgba(255,255,255,0.8)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    margin: '0 1rem .0375rem 1rem',
    maxWidth: '80vw',
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
    paddingTop: '130px',
  },
  drawerLink: {
    margin: '0 0 0.0375rem 0',
    padding: '.1rem 0',
  },
  drawerNavItem: {
    padding: '1rem',
    cursor: 'pointer',
    minWidth: '200px',
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
  initialYFix: {
    transform: 'scaleX(1.1) scaleY(1.05) rotate3d(1,1,1,-15deg) translateX(3px)',
  },
  fadeIn: {
    animationName: fadeInFrames,
    animationDuration: '1s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
  },
  fadeOut: {
    animationName: fadeOutFrames,
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
  delayAnimation: (index: number) => ({
    animationDelay: `${index * 0.1}s`,
  }),
  hidden: {
    display: 'none',
  },
  displayMobileOnly: {
    display: {
      [MOBILE]: 'flex',
      [DESKTOP]: 'none',
    },
  },
  displayDesktopOnly: {
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
  },
})

export default Navbar
