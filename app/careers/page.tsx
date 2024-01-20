import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.title1)}>
        <Text variant="xl">Careers</Text>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100vh',
  },
  title1: {
    marginTop: '150px',
    marginBottom: '40px',
  },
})
