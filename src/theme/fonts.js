import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'montas-semibold';
      src: url('/montas-semibold-webfont.woff2') format('woff2'),
           url('/montas-semibold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'montas-regular';
      src: url('/montas-regular-webfont.woff2') format('woff2'),
           url('/montas-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `}
  />
);

export default Fonts;
