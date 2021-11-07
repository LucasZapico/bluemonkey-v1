import React from 'react';
import { extendTheme } from '@chakra-ui/react';
import { Buttons, Links } from './buttons-links'
import { Headings, Fonts, Texts } from './typography'


const theme = extendTheme({
  textStyles: {},
  components:  {
    Heading: Headings,
    Link: Links,
    Button: Buttons,
    Text: Texts,
    Input: {
      baseStyle: {
        borderRadius: 'none',
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: 'none',
      },
    },
  },
  fonts: Fonts,
  colors: {
    brand: {
      zero: '#FAF3E0',
      one: '#faf6e9',
      two: '#FAF8F2',
      three: '#faf8f2',
      four: '#1E212D',
      five: '#2C3142',
      six: '#2f3b62',
      
    },
  },
  fontSizes: {
    '10xl': '9rem',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.zero',
        color: 'gray.600',
        fontSize: '18px',
        // color: 'brand.four',
        fontWeight: 600,
        letterSpacing: '0.1rem',
        lineHeight: 1.5,
      },
    },
  },  
});

export default theme;
