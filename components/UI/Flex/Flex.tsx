import * as stylex from '@stylexjs/stylex'

type TAlign = 'center' | 'flex-start' | 'flex-end'
type TJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type TWrap = 'wrap' | 'nowrap'

type FlexProps = {
  children: React.ReactNode
  style?: stylex.StyleXStyles | stylex.StyleXStyles[]
  variant?: 'row' | 'column'
  align?: TAlign
  justify?: TJustify
  wrap?: TWrap
}

export const Flex = ({
  children,
  style,
  variant,
  align,
  justify,
  wrap,
}: FlexProps) => {
  if (!variant) variant = 'row'

  return (
    <div
      {...stylex.props(
        styles.root,
        style,
        styles[variant],
        styles.align(align),
        styles.justify(justify),
        styles.wrap(wrap)
      )}
    >
      {children}
    </div>
  )
}

const styles = stylex.create({
  root: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  align: (align: TAlign | undefined) => ({
    alignItems: align,
  }),
  justify: (justify: TJustify | undefined) => ({
    justifyContent: justify,
  }),
  wrap: (wrap: TWrap | undefined) => ({
    flexWrap: wrap,
  }),
})
