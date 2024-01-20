import * as stylex from '@stylexjs/stylex'
import {
  fontSizeTokens,
  fontWeightTokens,
  lineHeightTokens,
  paddingTokens,
} from './Text.stylex'
import { colorTokens } from '../../../styles/colorTokens.stylex'

export type TextProps = {
  children: React.ReactNode
  style?: stylex.StyleXStyles
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'title' | 'xs' | 'sm' | 'important'
}

export const Text = ({ children, style, variant }: TextProps) => {
  return <span {...stylex.props(styles[variant], style)}>{children}</span>
}

const styles = stylex.create({
  h1: {
    fontSize: fontSizeTokens.h1,
    fontWeight: fontWeightTokens.h1,
    lineHeight: lineHeightTokens.h1,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xl,
    paddingLeft: paddingTokens.xl,
  },
  h2: {
    fontSize: fontSizeTokens.h2,
    fontWeight: fontWeightTokens.h2,
    lineHeight: lineHeightTokens.h2,
    color: colorTokens.white0,
    paddingRight: paddingTokens.lg,
    paddingLeft: paddingTokens.lg,
  },
  h3: {
    fontSize: fontSizeTokens.h3,
    fontWeight: fontWeightTokens.h3,
    lineHeight: lineHeightTokens.h3,
    color: colorTokens.white0,
    paddingRight: paddingTokens.md,
    paddingLeft: paddingTokens.md,
  },
  p: {
    fontSize: fontSizeTokens.p,
    fontWeight: fontWeightTokens.p,
    lineHeight: lineHeightTokens.p,
    color: colorTokens.white0,
    paddingRight: paddingTokens.sm,
    paddingLeft: paddingTokens.sm,
  },
  title: {
    fontSize: fontSizeTokens.h1,
    fontWeight: fontWeightTokens.h1,
    lineHeight: lineHeightTokens.h1,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xs,
    paddingLeft: paddingTokens.xs,
  },
  xs: {
    fontSize: fontSizeTokens.xs,
    fontWeight: fontWeightTokens.xs,
    lineHeight: lineHeightTokens.xs,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xxs,
    paddingLeft: paddingTokens.xxs,
  },
  important: {
    fontSize: fontSizeTokens.important,
    fontWeight: fontWeightTokens.important,
    lineHeight: lineHeightTokens.important,
    color: colorTokens.white0,
    paddingRight: paddingTokens.important,
    paddingLeft: paddingTokens.important,
  },
  sm: {
    fontSize: fontSizeTokens.sm,
    fontWeight: fontWeightTokens.sm,
    lineHeight: lineHeightTokens.sm,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xs,
    paddingLeft: paddingTokens.xs,
  },
})
