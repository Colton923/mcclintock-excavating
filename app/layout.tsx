import * as stylex from '@stylexjs/stylex'
import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell'

interface Props {
  children: React.ReactNode
  modal: React.ReactNode
}

export default async function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en" {...stylex.props(styles.html, styles.reset)}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="keywords" content="Liberty Village" />
      </head>
      <body {...stylex.props(styles.reset, styles.body)}>
        <main {...stylex.props(styles.main)}>
          <AppShell>{children}</AppShell>
        </main>
      </body>
    </html>
  )
}

type BREAKPOINT = '@media (max-width: 1200px)'
const MAX_WIDTH: BREAKPOINT = '@media (max-width: 1200px)' as BREAKPOINT

const styles = stylex.create({
  html: {
    colorScheme: 'dark',
  },
  reset: {
    minHeight: '100%',
    margin: 0,
    padding: 0,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    minHeight: '100vh',
    minWidth: '100vw',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    maxWidth: {
      default: '1200px',
      [MAX_WIDTH]: '100vw',
    },
    width: '100%',
  },
})
