import { FunctionComponent } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ThemeProvider } from '@mui/material'
import { useDarkTheme } from 'theme'

type Props = {
  component?: JSX.Element
}

export const Layout: FunctionComponent<Props> = ({ children, component }) => {
  const { theme, toggleDarkMode } = useDarkTheme()
  return (
    <ThemeProvider theme={theme}>
      {component}
      <Header handler={toggleDarkMode} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
