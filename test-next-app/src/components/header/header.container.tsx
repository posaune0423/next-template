import { FunctionComponent } from 'react'
import { Header as HeaderComponent } from './header'

type Props = {
  handler: () => void;
}

export const Header: FunctionComponent<Props> = (props) => {
  return <HeaderComponent handler={props.handler} />
}
