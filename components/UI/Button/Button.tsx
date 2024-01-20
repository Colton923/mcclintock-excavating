import * as stylex from '@stylexjs/stylex'
import { colorTokens } from '../../../styles/colorTokens.stylex'
import { margin, maxHeight, maxWidth, padding } from './Button.stylex'
import type { ButtonProps } from './types'

export const Button = ({ children, style, onClick, size }: ButtonProps) => {
  return (
    <div onClick={onClick} {...stylex.props(styles.root, styles[size], style)}>
      {children}
    </div>
  )
}

const styles = stylex.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    backgroundColor: {
      default: colorTokens.primary_red_dark2,
      ':hover': colorTokens.primary_red_dark3,
      ':active': colorTokens.primary_red_dark3,
    },
    color: {
      default: colorTokens.white0,
      ':hover': colorTokens.white8,
      ':active': colorTokens.white8,
    },
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    flexDirection: 'row',
    borderColor: colorTokens.primary_red_dark2,
    borderStyle: 'solid',
    borderWidth: '1px',
    textShadow: `
    1px 1px 0px rgba(0,0,0,1),
    -1px -1px 0px rgba(0,0,0,1),
    -1px 1px 0px rgba(0,0,0,1),
    1px -1px 0px rgba(0,0,0,1)
    `,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  xs: {
    padding: maxHeight['xs'],
    maxWidth: maxWidth['xs'],
    maxHeight: maxHeight['xs'],
    marginLeft: margin['xs'],
    marginRight: margin['xs'],
  },
  sm: {
    padding: padding['sm'],
    maxWidth: maxWidth['sm'],
    maxHeight: maxHeight['sm'],
    marginLeft: margin['sm'],
    marginRight: margin['sm'],
  },
  md: {
    padding: padding['md'],
    maxWidth: maxWidth['md'],
    maxHeight: maxHeight['md'],
    marginLeft: margin['md'],
    marginRight: margin['md'],
  },
  lg: {
    padding: padding['lg'],
    maxWidth: maxWidth['lg'],
    maxHeight: maxHeight['lg'],
    marginLeft: margin['lg'],
    marginRight: margin['lg'],
  },
  xl: {
    padding: padding['xl'],
    maxWidth: maxWidth['xl'],
    maxHeight: maxHeight['xl'],
    marginLeft: margin['xl'],
    marginRight: margin['xl'],
  },
  'xs-compact': {
    padding: padding['xs-compact'],
    maxWidth: maxWidth['xs-compact'],
    maxHeight: maxHeight['xs-compact'],
    marginLeft: margin['xs-compact'],
    marginRight: margin['xs-compact'],
  },
  'sm-compact': {
    padding: padding['sm-compact'],
    maxWidth: maxWidth['sm-compact'],
    maxHeight: maxHeight['sm-compact'],
    marginLeft: margin['sm-compact'],
    marginRight: margin['sm-compact'],
  },
  'md-compact': {
    padding: padding['md-compact'],
    maxWidth: maxWidth['md-compact'],
    maxHeight: maxHeight['md-compact'],
    marginLeft: margin['md-compact'],
    marginRight: margin['md-compact'],
  },
  'lg-compact': {
    padding: padding['lg-compact'],
    maxWidth: maxWidth['lg-compact'],
    maxHeight: maxHeight['lg-compact'],
    marginLeft: margin['lg-compact'],
    marginRight: margin['lg-compact'],
  },
  'xl-compact': {
    padding: padding['xl-compact'],
    maxWidth: maxWidth['xl-compact'],
    maxHeight: maxHeight['xl-compact'],
    marginLeft: margin['xl-compact'],
    marginRight: margin['xl-compact'],
  },
})
