import * as stylex from '@stylexjs/stylex'
import { Text } from '@/components/UI/Text/Text'

const NameTag = ({ name }: { name: string }) => {
  return (
    <span {...stylex.props(styles.nameTag)}>
      <Text variant="xxs" uppercase>
        {name}
      </Text>
    </span>
  )
}

export default NameTag

const styles = stylex.create({
  nameTag: {
    width: '100vw',
    height: '30px',
    position: 'fixed',
    top: 0,
    left: 0,
    textAlign: 'center',
  },
})
