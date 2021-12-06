import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useDarkTheme } from 'hooks/theme'
import { FunctionComponent } from 'react'

type Props = {
  handler: () => void;
}

export const Header: FunctionComponent<Props> = (props) => {
  const { darkMode } = useDarkTheme()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Next App
          </Typography>
          {darkMode ? (
            <IconButton color="inherit" onClick={props.handler}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={props.handler}>
              <Brightness4Icon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
