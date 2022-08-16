import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    orange: {
      50:  '#fefcfb',
      100: '#ffe8d7',
      200: '#ffdcc3',
      300: '#ffb381',
      400: '#f76808',
      500: '#ed5f00',
      600: '#943e00',
      700: '#763205',
      800: '#5f2a06',
      900: '#441f04',
    }
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
      }
    }
  }
})
