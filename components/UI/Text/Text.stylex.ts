import * as stylex from '@stylexjs/stylex'

export const fontSizeTokens = stylex.defineVars({
  h1: '32px',
  h2: '24px',
  h3: '20px',
  p: '20px',
  xs: '12px',
  sm: '14px',
  important: '16px',
})

export const fontWeightTokens = stylex.defineVars({
  h1: 'bolder',
  h2: 'bolder',
  h3: 'normal',
  p: 'normal',
  sm: 'bold',
  xs: 'bold',
  important: 'bolder',
})

export const lineHeightTokens = stylex.defineVars({
  h1: '80px',
  h2: '48px',
  h3: '34px',
  p: '30px',
  sm: '22px',
  xs: '20px',
  important: '24px',
})

export const paddingTokens = stylex.defineVars({
  xxs: '4px',
  xs: '10px',
  sm: '18px',
  md: '24px',
  lg: '30px',
  xl: '34px',
  important: '20px',
})
