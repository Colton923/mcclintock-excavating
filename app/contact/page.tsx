import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return <div {...stylex.props(styles.base)}>Contact</div>
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
  },
})
