import * as stylex from '@stylexjs/stylex'
import { colorTokens } from '../../styles/colorTokens.stylex'

type FooterProps = {}

const Footer = () => {
  return (
    <div {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.navBase)}>
          <div {...stylex.props(styles.navItems)}>
            <span {...stylex.props(styles.navItem)}>About</span>
            <span {...stylex.props(styles.navItem)}>Our Work</span>
            <span {...stylex.props(styles.navItem)}>Careers</span>
            <span {...stylex.props(styles.navItem)}>Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const styles = stylex.create({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100vw',
    height: '200px',
  },
  base: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderTopColor: 'rgba(255,255,255,0.3)',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
  },
  navBase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  navItems: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navItem: {
    color: {
      default: 'rgba(255,255,255,0.5)',
      ':hover': 'rgba(255,255,255,1)',
    },
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '1rem',
    margin: '1rem',
    cursor: 'pointer',
  },
})

export default Footer
