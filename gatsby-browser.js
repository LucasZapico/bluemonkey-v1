import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

// import { Fonts } from './src/theme.js';
import './src/assets/sass/index.scss';

// font-family: 'Alice', serif;
// font-family: 'Kulim Park', sans-serif;

const customTheme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'brand.three',
      },
    },

    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
        borderRadius: '100px',
        // paddingLeft: '2rem',
        px: '50px',
      },
      variants: {
        btnCTA: {
          backgroundColor: 'brand.seven',
        },
        btnOne: {
          color: 'brand.dark',
          backgroundColor: 'brand.six',
        },
        btnTwo: {
          // backgroundColor: 'transparent',
          color: 'brand.dark',
          border: '2px',
          borderColor: 'brand.three',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '400',
        color: '#3c474e',
      },
      variants: {
        flare: {
          fontFamily: 'Open Sans',
          fontWeight: '300',
        },
      },
    },
  },
  fonts: {
    heading: 'Noto Sans JP',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        minHeight: '100vh',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
  colors: {
    black: '#1D1D1E',
    white: '#F0F2FA', // '#E8ECFA', //'#F5F8FC',
    brand: {
      one: '#FAF3E0', // tan
      two: '#FAF8F2', // tan - 1

      three: '#1C4766', // blue dark
      four: '#A3BCCF', // blue light
      five: '#1E212D', // dark
      six: '#2C3142', // dark + 1
      seven: '#E5AA91', // peach
    },
  },
});

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    {element}
  </ChakraProvider>
);
