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
  List,
  Link as ChLink,
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Layout, ScrollAnimation, LinkThree } from '../components/index';

// const servicesCopy = [{ Branding: [] }];

const services = () => {
  return (
    <Layout>
      <Box pt={40}>
        <Container maxW="container.xl">
          <Heading as="h1" lineHeight="base" mb={6} size="3xl">
            Services
          </Heading>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" mb={6} pt={28} size="2xl">
              <a id="branding">Branding</a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box
                pr={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <Heading as="h5">What we do</Heading>
                <Text lineHeight="base" fontSize="xl">
                  Market competitiveness through unique brand differentiation
                </Text>
              </Box>
              <Box
                pl={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <UnorderedList>
                  <ListItem>Audits</ListItem>
                  <ListItem>Mark and Logo enhancement</ListItem>
                  <ListItem>Color palette curation and enhancement</ListItem>
                  <ListItem>
                    Typography palette curation and enhancement
                  </ListItem>
                  <ListItem>
                    Imagery and illustration curation and enhancement
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" mb={6} pt={28} size="2xl">
              <a id="design">Design</a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box
                pr={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <Heading as="h5">What we do</Heading>
                <Text lineHeight="base" fontSize="xl">
                  Market competitiveness through unique brand differentiation
                </Text>
              </Box>
              <Box
                pl={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <UnorderedList>
                  <ListItem>Custom content driven design</ListItem>
                  <ListItem>
                    Custom experiences around your unique audience
                  </ListItem>
                  <ListItem>Unique design that is not overly trendy</ListItem>
                  <ListItem>
                    Experiences driven by tested user experience research
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" size="2xl" mb={6} pt={28}>
              <a id="development">Development</a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box
                pr={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <Heading as="h5">What we do</Heading>
                <Text lineHeight="base" fontSize="xl">
                  Market competitiveness through unique brand differentiation
                </Text>
              </Box>
              <Box
                pl={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <UnorderedList>
                  <ListItem>Custom content driven design</ListItem>
                  <ListItem>
                    Custom experiences around your unique audience
                  </ListItem>
                  <ListItem>Unique design that is not overly trendy</ListItem>
                  <ListItem>
                    Experiences driven by tested user experience research
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" mb={6} pt={28}>
              <a id="seo-and-business-integration">
                SEO and Business Integrations
              </a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box
                pr={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <Heading as="h5">What we do</Heading>
                <Text lineHeight="base" fontSize="xl">
                  We ensure your web presence is discoverable
                </Text>
              </Box>
              <Box
                pl={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <UnorderedList>
                  <ListItem>
                    Technical SEO optimized for all major search engines
                  </ListItem>
                  <ListItem>Google and Bing analytics integrations</ListItem>
                  Intergrations with CMS(content management system),
                  CRM(customer relationship management), email marketing
                  platforms, bookings and more.
                  <ListItem />
                  <ListItem>
                    Experiences driven by tested user experience research
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
            <Text lineHeight="base" fontSize="xl" />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default services;
