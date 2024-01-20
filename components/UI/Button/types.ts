import type { StyleXStyles } from '@stylexjs/stylex'
export type Sizes =
  | 'xs-compact'
  | 'sm-compact'
  | 'md-compact'
  | 'lg-compact'
  | 'xl-compact'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

export type ButtonProps = {
  children?: React.ReactNode
  style?: StyleXStyles
  onClick?: () => void
  size: Sizes
}
