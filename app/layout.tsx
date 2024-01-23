import * as stylex from '@stylexjs/stylex'
import '@/styles/globals.css'
import AppShell from '@/components/AppShell/AppShell'
import { Metadata } from 'next'
import inject from '@stylexjs/dev-runtime'

interface Props {
  children: React.ReactNode
  modal: React.ReactNode
}

inject({
  styleResolution: 'application-order',
  test: process.env.NODE_ENV === 'test' || false,
  classNamePrefix: 'x-',
  useRemForFontSize: true,
  dev: process.env.NODE_ENV === 'development' || false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mcclintocktruckingandexcavating.com'),
  title: 'McClintock Trucking & Excavating',
  description: 'Quad Cities, Illinois, and Iowa - Trucking & Excavating',
  icons: {
    icon: '/favicon.ico',
    shortcut: 'favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'favicon-32x32',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'favicon-16x16',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://mcclintocktruckingandexcavating.com',
    title: 'McClintock Trucking & Excavating',
    description: 'Quad Cities Area Trucking and Excavating',
    locale: 'en_US',
    images: [
      {
        url: 'https://mcclintocktruckingandexcavating.com/android-chrome-512x512.png',
        width: 32,
        height: 32,
        alt: 'McClintock Trucking & Excavating',
      },
    ],
  },
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
        <meta name="keywords" content="McClintock Trucking & Excavating" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
    overflowX: 'hidden',
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
