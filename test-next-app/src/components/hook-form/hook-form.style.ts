import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  body: {
    background: '#0e101c',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif',
  },
  form: { maxWidth: '500px', margin: '0 auto' },
  h1: {
    fontWeight: 100,
    color: 'white',
    textAlign: 'center',
    paddingBottom: '10px',
    borderBottom: '1px solid rgb(79, 98, 148)',
  },
  p: {
    color: '#bf1650',
    '&::before': { display: 'inline', content: '"⚠ "' },
  },
  input: {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid white',
    padding: '10px 15px',
    marginBottom: '10px',
    fontSize: '14px',
  },
  label: {
    lineHeight: 2,
    textAlign: 'left',
    display: 'block',
    marginBottom: '13px',
    marginTop: '20px',
    color: 'white',
    fontSize: '14px',
    fontWeight: 200,
  },
  submitBtn: {
    background: '#ec5990',
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    marginTop: '40px',
    padding: '20px',
    fontSize: '16px',
    fontWeight: 100,
    letterSpacing: '10px',
    WebkitAppearance: 'none',
    '&:hover': {
      background: '#bf1650',
      transition: '0.3s all',
    },
    '&:active': {
      transition: '0.3s all',
      transform: 'translateY(3px)',
      border: '1px solid transparent',
      opacity: 0.8,
    },
    '&:disabled': {
      opacity: 0.4,
    },
  },
  hr: { marginTop: '30px' },
}))
