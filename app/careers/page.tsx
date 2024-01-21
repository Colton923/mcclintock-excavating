import { CareerForm } from '@/components/Forms/CareerForm/CareerForm'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.title1)}>
        <CareerForm />
      </div>
    </div>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100vh',
    maxWidth: '1200px',
  },
  title1: {
    marginTop: {
      [MOBILE]: '150px',
      [DESKTOP]: '250px',
    },
    marginBottom: '40px',
  },
})
