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
  style?: stylex.StyleXStyles | stylex.StyleXStyles[]
  variant: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
  uppercase?: boolean
}

export const Text = ({ children, style, variant, uppercase }: TextProps) => {
  return (
    <span {...stylex.props([styles[variant], style, uppercase && styles.uppercase])}>
      {children}
    </span>
  )
}

const styles = stylex.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  xl: {
    fontSize: fontSizeTokens.xl,
    fontWeight: fontWeightTokens.xl,
    lineHeight: lineHeightTokens.xl,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xl,
    paddingLeft: paddingTokens.xl,
  },
  lg: {
    fontSize: fontSizeTokens.lg,
    fontWeight: fontWeightTokens.lg,
    lineHeight: lineHeightTokens.lg,
    color: colorTokens.white0,
    paddingRight: paddingTokens.lg,
    paddingLeft: paddingTokens.lg,
  },
  md: {
    fontSize: fontSizeTokens.md,
    fontWeight: fontWeightTokens.md,
    lineHeight: lineHeightTokens.md,
    color: colorTokens.white0,
    paddingRight: paddingTokens.md,
    paddingLeft: paddingTokens.md,
  },
  sm: {
    fontSize: fontSizeTokens.sm,
    fontWeight: fontWeightTokens.sm,
    lineHeight: lineHeightTokens.sm,
    color: colorTokens.white0,
    paddingRight: paddingTokens.sm,
    paddingLeft: paddingTokens.sm,
  },
  xs: {
    fontSize: fontSizeTokens.xs,
    fontWeight: fontWeightTokens.xs,
    lineHeight: lineHeightTokens.xs,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xxs,
    paddingLeft: paddingTokens.xxs,
  },
  xxs: {
    fontSize: fontSizeTokens.xxs,
    fontWeight: fontWeightTokens.xxs,
    lineHeight: lineHeightTokens.xxs,
    color: colorTokens.white0,
    paddingRight: paddingTokens.xxs,
    paddingLeft: paddingTokens.xxs,
  },
})
