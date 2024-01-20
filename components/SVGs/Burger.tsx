import SVGProps from './types'
import * as stylex from '@stylexjs/stylex'

export const Burger = ({ width, height, fill, stroke, style }: SVGProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={width ?? '100px'}
      height={height ?? '100px'}
      {...stylex.props(style)}
      fill={fill ?? 'none'}
    >
      <path
        d="M 10 10 L 90 10"
        stroke={stroke ?? 'black'}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 10 50 L 90 50"
        stroke={stroke ?? 'black'}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 10 90 L 90 90"
        stroke={stroke ?? 'black'}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}
