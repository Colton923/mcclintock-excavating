import * as stylex from '@stylexjs/stylex'
import { mobileDisplays } from './root.stylex'
import type { StyleXClassNameFor } from '@stylexjs/stylex/lib/StyleXTypes'
import type { OverridesForTokenType } from '@stylexjs/stylex/lib/StyleXTypes'

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

export const hideMobileTheme = stylex.createTheme(mobileDisplays, {
  displayDesktopOnly: {
    default: 'none',
    [DESKTOP]: 'flex',
    [MOBILE]: 'none',
  },
})

export const hideDesktopTheme = stylex.createTheme(mobileDisplays, {
  displayMobileOnly: {
    default: 'flex',
    [MOBILE]: 'flex',
    [DESKTOP]: 'none',
  },
})

export const maxHeightNavbar = stylex.createTheme(mobileDisplays, {
  displayDesktopOnly: {
    default: '130px',
    [MOBILE]: '250px',
    [DESKTOP]: '130px',
  },
})
