import React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Header, Footer, SEO, Banner, Cursor } from './index';
// import { Favicon } from '../images/ccg-mark_favicon.ico';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Cursor />
      <Box minHeight="100vh" overflow="hidden">
        <Header />
        <Box background="brand.two">{children}</Box>
        {/* <Banner /> */}
      </Box>

      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/19886034.js"
      ></script>

      <Footer />
    </>
  );
};

export default Layout;
