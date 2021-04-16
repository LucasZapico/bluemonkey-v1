import React from 'react';
import { extendTheme } from '@chakra-ui/react';

const components = {};

const theme = extendTheme({
  textStyles: {},
  components: {
    Box: {
      variants: {
        dark: {
          backgroundColor: 'brand.three',
          color: 'brand.one',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.three',
        textDecoration: 'underline',
      },
    },
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
        _hover: {
          textDecoration: 'underline',
        },
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
        color: '#3c474e',
      },
      h1: {
        fontFamily: 'montas-semibold',
      },
    },
  },
  fonts: {
    heading: "'Noto Sans JP'",
    headingTwo: 'montas-semibold',
    body: "'Inter', sans-serif;",
  },
  styles: {
    global: {
      body: {
        minHeight: '100vh',
      },
      a: {
        color: 'teal.500',
      },
      h1: {
        fontFamily: 'montas-semibold',
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

export default theme;
