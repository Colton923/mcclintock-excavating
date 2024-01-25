import * as stylex from '@stylexjs/stylex'

type CenterProps = {
  children: React.ReactNode
  style?: stylex.StyleXStyles | stylex.StyleXStyles[]
  mih?: string
  miw?: string
}

export const Center = ({ children, style, miw, mih }: CenterProps) => {
  return (
    <div {...stylex.props(styles.root, style, styles.mih(mih), styles.miw(miw))}>
      <div {...stylex.props(styles.center)}>{children}</div>
    </div>
  )
}

const styles = stylex.create({
  root: {
    position: 'relative',
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  mih: (mih: string | undefined) => ({
    minHeight: mih,
  }),
  miw: (miw: string | undefined) => ({
    minWidth: miw,
  }),
})
