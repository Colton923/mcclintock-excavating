import * as stylex from '@stylexjs/stylex'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

type Props = {
  children: React.ReactNode
}

const AppShell = ({ children }: Props) => {
  return (
    <div {...stylex.props(styles.base)}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
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

export default AppShell
