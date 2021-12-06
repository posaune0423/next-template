import { createTheme } from '@mui/material'
import { useEffect, useState } from 'react'

export const useDarkTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'on' ? true : false
    } else {
      return false
    }
  })

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  })

  const handleDarkModeOn = () => {
    localStorage.setItem('darkMode', 'on')
    setDarkMode(true)
    console.log(theme)
  }

  const handleDarkModeOff = () => {
    localStorage.setItem('darkMode', 'off')
    setDarkMode(false)
    console.log(theme)
  }

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'on') {
      setDarkMode(true)
    } else if (localStorage.getItem('darkMode') === 'off') {
      setDarkMode(false)
    } else {
      setDarkMode(false)
    }
  }, [])

  return {
    darkMode,
    theme,
    handleDarkModeOff,
    handleDarkModeOn,
  }
}
