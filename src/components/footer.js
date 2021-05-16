import { Flex, Box, Container, Heading, Text } from '@chakra-ui/layout';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import Link from 'gatsby-plugin-transition-link/AniLink';
import moment from 'moment';
import { LinkPhone, LinkEmail, StartAConversation, LinkOne } from './index';
// import Logo from '../assets/ccg-mark.svg';

const Footer = ({ title, description, location }) => {
  const [connect, setConnect] = useState('');
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
              <Box
                bg="brand.five"
                color="brand.one"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                px={{ base: 2, sm: 6 }}
                pt={20}
              >
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
                <LinkOne
                  color="brand.one"
                  href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A"
                >
                  Join our slack channel <ExternalLinkIcon />
                </LinkOne>

                <Box pb={4} mt={20}>
                  <Text>Last updated: {moment(Date()).format('l')}</Text>
                  <Text>
                    Copyright {baseUrl} {moment(Date()).format('y')}
                  </Text>
                  <Link to="/privacy" swipe direction="left">
                    <Text>Privacy</Text>
                  </Link>
                </Box>
              </Box>
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
