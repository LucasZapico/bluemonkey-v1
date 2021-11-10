// gatsby-ssr.js
export { wrapRootElement } from './gatsby-browser';

import React from 'react'

const {
  GATSBY_ENV, STAGING, 
  NODE_ENV, GATSBY_GOOGLE_ANALYTIC_ID,
} = process.env;

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  
  setHeadComponents([
    
  ])
  setPostBodyComponents([
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q2GC028QSQ"></script>,
    <script
      key="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q2GC028QSQ'); 
      `,
      }}
    />
  ])  
  
  

  
}