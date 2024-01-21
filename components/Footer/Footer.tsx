import * as stylex from '@stylexjs/stylex'
import { A } from '../UI/A/A'

const Footer = () => {
  return (
    <div {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.base)}>
        <div {...stylex.props(styles.navBase)}>
          <div {...stylex.props(styles.navItems)}>
            <A href="/about">
              <span {...stylex.props(styles.navItem)}>About</span>
            </A>
            <A href="/projects">
              <span {...stylex.props(styles.navItem)}>Projects</span>
            </A>
            <A href="/services">
              <span {...stylex.props(styles.navItem)}>Services</span>
            </A>
            <A href="/careers">
              <span {...stylex.props(styles.navItem)}>Careers</span>
            </A>
            <A href="/contact">
              <span {...stylex.props(styles.navItem)}>Contact</span>
            </A>
          </div>
        </div>
      </div>
    </div>
  )
}

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
