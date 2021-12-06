import { FunctionComponent } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ThemeProvider } from '@mui/material'
import { useDarkTheme } from 'theme'
import Head from 'next/head'

type Props = {
  component?: JSX.Element
}

export const Layout: FunctionComponent<Props> = ({ children, component }) => {
  const { theme, toggleDarkMode } = useDarkTheme()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {component}
        <Header handler={toggleDarkMode} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}
