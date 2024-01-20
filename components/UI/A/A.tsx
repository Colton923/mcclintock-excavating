import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'
import type { AProps } from './types'

export const A = ({ children, style, href }: AProps) => {
  return (
    <div {...stylex.props(style)}>
      <Link href={href} {...stylex.props(styles.A)} scroll={false}>
        {children}
      </Link>
    </div>
  )
}

const styles = stylex.create({
  A: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000',
    position: 'relative',
  },
})
