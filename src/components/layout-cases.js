import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Header, Footer, SEO, Banner, Cursor } from './index';
// import { Favicon } from '../images/ccg-mark_favicon.ico';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />

      <Box
        bgGradient="linear(to-b, brand.one , brand.two )"
        minHeight="100vh"
        overflow="hidden"
      >
        <Box className="our-work" margin="auto" py={40}>
          <Container maxW="container.xl">{children}</Container>
        </Box>
        {/* <Banner /> */}
      </Box>
    </>
  );
};

export default Layout;
