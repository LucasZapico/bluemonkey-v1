import './src/assets/sass/index.scss';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import Fonts from './src/theme/fonts';
import React from 'react';
import theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts />
    {element}
  </ChakraProvider>
);
