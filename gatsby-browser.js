import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Fonts from './src/theme/fonts';
import theme from './src/theme/theme';
import './src/assets/sass/index.scss';
// import './src/assets/sass/font.css';
// import './static/montas-regular-webfont.woff';
// import './static/montas-regular-webfont.woff2';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts />
    {element}
  </ChakraProvider>
);
