import { Flex, Box, Container, Heading, Text, Link } from '@chakra-ui/layout';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';


import { LinkPhone, LinkEmail, StartAConversation } from '../index';
import Mark from '../../assets/mark/blue-monkey-hanging.svg';
import SubFooter from './subfooter'

const Footer = ({ title, description, location }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    baseUrl,
    defaultImage,
    phone,
    twitterUsername,
  } = site.siteMetadata;

  const data = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <footer>
      <Box background="brand.two" pt={10}>
        <Box>
          <Flex minHeight="100%" flexDirection="column">
            <Box flexGrow="1">
              {location.pathname.includes('contact') ? (
                <div></div>
              ) : (
                <Container maxW="container.xl">
                  <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    mb={4}
                    p={{ base: 0, sm: 6 }}
                    justifyContent="space-between"
                    pt={20}
                  >
                    <a id="start-a-conversation"></a>
                    <StartAConversation />
                  </Flex>
                </Container>
              )}
              <Flex bg="brand.five"
                color="brand.one" flexDirection="column" py={6}>
                  <Container maxW="container.xl">
              <Box
                
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                px={{ base: 2, sm: 6 }}
                pt={20}
              >
                <Flex flexDirection="column">
                  <Mark width="200px" height="auto" />
                  
                  </Flex>
                <Flex flexDirection="column">
                  <Heading variant="pri" color="brand.zero">Contact</Heading>
                <Heading as="h4" size="sm" mb={3}>
                  <LinkEmail color="brand.one">{`Connect@${baseUrl}`}</LinkEmail>
                </Heading>
                <LinkPhone color="brand.one">{phone}</LinkPhone>
                <Text
                  fontSize="md"
                  mb={3}
                  lineHeight="base"
                  color="brand.one"
                  maxWidth="600px"
                >
                  We are fully remote on Earth 🌎 and we are almost always
                  available via slack. English is our first language.
                </Text>
                <Heading as="h4" size="sm" mb={3} color="brand.one" />
                <Box>
                <Link display="inline" variant="linkOneLight"
                  color="brand.one"
                  href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A"
                >
                  Join our slack channel <ExternalLinkIcon />
                </Link>
                </Box>
                </Flex>
                

              </Box>
              <SubFooter baseUrl={baseUrl}/>
              </Container>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Footer.defaultProps = {
  title: null,
  description: null,
};

const query = graphql`
  query Site {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        baseUrl
        defaultImage: image
        twitterUsername
        phone
      }
    }
  }
`;
