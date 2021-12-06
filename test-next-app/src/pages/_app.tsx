import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { useDarkTheme } from 'hooks/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useDarkTheme()
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
