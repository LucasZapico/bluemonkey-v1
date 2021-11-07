import { Global } from '@emotion/react'
import React from 'react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'montas';
      src: url('/montas-semibold-webfont.woff2') format('woff2'),
           url('/montas-semibold-webfont.woff') format('woff');
    }
  `}
  />
)

export default Fonts
