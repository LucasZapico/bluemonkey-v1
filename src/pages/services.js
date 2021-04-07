import React, { useRef, useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';
import {
  Flex,
  Grid,
  GridItem,
  Box,
  UnorderedList,
  ListItem,
  Container,
  Heading,
  Button,
  Text,
  Link as ChLink,
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Layout, ScrollAnimation, LinkThree } from '../components/index';

const services = () => {
  return (
    <Layout>
      <Box pt={40}>
        <Container maxW="container.xl">
          <Heading
            as="h1"
            lineHeight="base"
            mb={6}
            size="3xl"
            minHeight="150px"
          >
            Services
          </Heading>
          <Box minHeight="400px" height="auto">
            <Heading
              as="h3"
              lineHeight="base"
              mb={6}
              size="2xl"
              minHeight="150px"
            >
              <a id="branding">Branding</a>
            </Heading>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading
              as="h3"
              lineHeight="base"
              mb={6}
              size="2xl"
              minHeight="150px"
            >
              <a id="design">Design</a>
            </Heading>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading
              as="h3"
              lineHeight="base"
              size="2xl"
              mb={6}
              minHeight="150px"
            >
              <a id="development">Development</a>
            </Heading>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" mb={6} minHeight="150px">
              <a id="seo-and-business-integration">
                SEO and Business Integrations
              </a>
            </Heading>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default services;
