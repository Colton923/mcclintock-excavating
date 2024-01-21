import * as stylex from '@stylexjs/stylex'
import { colorTokens } from '../../../styles/colorTokens.stylex'

export type CardProps = {
  children?: React.ReactNode
  style?: stylex.StyleXStyles
}

export const Card = ({ children, style }: CardProps) => {
  return <div {...stylex.props(styles.root, style)}>{children}</div>
}

const styles = stylex.create({
  root: {
    borderRadius: '8px',
    backgroundColor: colorTokens.black8,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderColor: colorTokens.primary_red_dark3,
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '16px',
  },
})
