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

const Footer = ({ title, description }) => {
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
    <>
      <Box background="brand.two" py={6}>
        <Box minHeight="500px">
          <Flex minHeight="100%" flexDirection="column">
            <Box flexGrow="1">
              <Flex alignItems="center" mb={4} p={{ base: 0, sm: 6 }}>
                <StartAConversation />
              </Flex>
              <Box bg="brand.five" color="brand.one" p={{ base: 2, sm: 6 }}>
                <Heading as="h4" size="sm" mb={3}>
                  <LinkEmail color="brand.one">{`Connect@${baseUrl}`}</LinkEmail>
                </Heading>
                <LinkPhone color="brand.one">{phone}</LinkPhone>
                <Heading
                  as="h4"
                  size="sm"
                  mb={3}
                  color="brand.one"
                  maxWidth="600px"
                >
                  We are fully remote on Earth 🌎 but we are almost always
                  available via slack.
                </Heading>
                <Heading as="h4" size="sm" mb={3} color="brand.one" />
                <LinkOne
                  color="brand.one"
                  href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A"
                >
                  Join our slack channel <ExternalLinkIcon />
                </LinkOne>
                {/* <Heading as="h4" size="sm" color="brand.one">
                {phone}
              </Heading> */}

                <Box pb={4} mt={10}>
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
      {/* <ConnectModal item={connect} /> */}
    </>
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
