  import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Header, Footer, SEO, Banner, Cursor } from './index';
import { EnvCheckPoint } from '../dev-helpers/logging'

const isBrowser = typeof window !== "undefined"

EnvCheckPoint()

const CursorTest = () => {
  if(isBrowser ){
  return  (navigator.userAgent.indexOf("FireFox") != -1) ? <Cursor /> : <div></div>;
}else {
  return <div></div>
}

}

const Layout = ({ location, children }) => {
  useEffect(() => {
    console.log('loca', location);
  }, [location]);

  

  return (
    <>
      <SEO />
  
        <CursorTest/>
      <Box minHeight="100vh" overflow="hidden">
        <Header zIndex={10} location={location} />
        <Box background="brand.one">{children}</Box>
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
