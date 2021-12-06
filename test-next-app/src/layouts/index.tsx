import { FunctionComponent } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

type Props = {
  component?: JSX.Element
}

export const Layout: FunctionComponent<Props> = ({ children, component }) => {
  return (
    <>
      {component}
      <Header />
      {children}
      <Footer />
    </>
  )
}
