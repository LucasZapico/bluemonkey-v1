import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Header, Footer, SEO, Banner, Cursor } from './index';
import { EnvCheckPoint } from '../dev-helpers/logging'

EnvCheckPoint()

const Layout = ({ location, children }) => {
  useEffect(() => {
    console.log('loca', location);
  }, [location]);
  return (
    <>
      <SEO />
      <Cursor />
      <Box minHeight="100vh" overflow="hidden">
        <Header zIndex={10} location={location} />
        <Box background="brand.two">{children}</Box>
        {/* <Banner /> */}
      </Box>
      <Footer location={location} />
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/19886034.js"
      ></script>
    </>
  );
};

export default Layout;
