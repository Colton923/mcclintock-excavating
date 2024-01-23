import * as stylex from '@stylexjs/stylex'

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

export const mobileDisplays = stylex.defineVars({
  displayMobileOnly: {
    default: 'flex',
    [MOBILE]: 'flex',
    [DESKTOP]: 'none',
  },
  displayDesktopOnly: {
    default: 'none',
    [MOBILE]: 'none',
    [DESKTOP]: 'flex',
  },
})
