import React, { useRef, useEffect, useState } from 'react';
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
import { generate} from 'shortid'
import MonkeyOne from '../assets/monkey_1.svg';
import {
  Layout,
  ScrollAnimation,
  LinkThree,
  SliderOne,
} from '../components/index';
import { GatsbyjsLogo, NextjsLogo, ReactjsLogo, CommercejsLogo, NetlifyLogo } from '../assets/logos';
import BackgroundIll from '../assets/background.svg'



const services = ({ data }) => {
  const Logos = [<GatsbyjsLogo/>, <NextjsLogo/>, <ReactjsLogo/>, <CommercejsLogo/>, <NetlifyLogo/>]
  return (
    <main>
      <Box py={40} position="relative">
      <Box zIndex="-1" position="absolute" top="0" left="0" width="100%">
    <BackgroundIll/>
    </Box>
        <Box pt={20}>
          <Container maxW="container.xl">
            <Heading
              variant="pri"
              as="h1"
              lineHeight="base"
              size="5xl"
            >
              Services
            </Heading>
            
          </Container>
          <Box
            minHeight="400px"
            height="auto"
            color="brand.one"
            backgroundColor="brand.five"
          >
            <Container maxW="container.xl">
              <a id="branding">
                <Heading
                  as="h3"
                  lineHeight="base"
                  mb={20}
                  pt={28}
                  size="4xl"
                  color="brand.one"
                  variant="pri"
                >
                  Branding
                </Heading>
              </a>
              <Flex flexDirection="row" flexWrap="wrap" pb={20}>
                <Box mb={20}>
                  <Box
                    pr={{ base: 0, md: 6 }}
                    flexGrow="1"
                    flexBasis={{ base: '100%', md: '50%' }}
                  >
                    <Heading as="h5" mb={6} color="brand.one">
                      What we do
                    </Heading>
                    <Text maxWidth="500px" lineHeight="base" fontSize="xl" color="brand.one">
                      Market competitiveness through unique brand
                      differentiation
                    </Text>
                  </Box>
                  <Box
                    pr={{ base: 0, md: 6 }}
                    flexGrow="1"
                    flexBasis={{ base: '100%', md: '50%' }}
                  >
                    <UnorderedList mt={4}>
                      <ListItem>Audits</ListItem>
                      <ListItem>Mark and Logo enhancement</ListItem>
                      <ListItem>
                        Color palette curation and enhancement
                      </ListItem>
                      <ListItem>
                        Typography palette curation and enhancement
                      </ListItem>
                      <ListItem>
                        Imagery and illustration curation and enhancement
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
                <Box
                  pr={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: '50%' }}
                  width={{ base: '100%', md: '50%' }}
                >
                  <SliderOne slides={data.brandShowcaseImage.edges} />
                </Box>
              </Flex>
            </Container>
          </Box>
          <Box minHeight="400px" height="auto" py={20} mb={20}>
            <Container maxW="container.xl">
              <Heading
                as="h3"
                lineHeight="base"
                mb={20}
                pt={28}
                size="4xl"
                variant="pri"
              >
                <a id="design">Design</a>
              </Heading>
              <Flex flexDirection="row" flexWrap="wrap">
                <Box
                  mb={20}
                  pr={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: '50%' }}
                >
                  <Heading as="h5" mb={6}>
                    What we do
                  </Heading>
                  <Text maxWidth="500px" lineHeight="base" fontSize="xl" >
                    Custom web design tailored to business objectives
                  </Text>
                  <UnorderedList mt={4}>
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

                <Box
                  pr={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: '50%' }}
                  width={{ base: '100%', md: '50%' }}
                >
                  <SliderOne slides={data.designShowcaseImage.edges} />
                </Box>
              </Flex>
            </Container>
          </Box>
          <Box
            py={20}
            minHeight="400px"
            height="auto"
            color="brand.one"
            backgroundColor="brand.five"
          >
            <Container maxW="container.xl">
              <Flex flexWrap="wrap">
                <Box>
                  <Heading
                    as="h3"
                    lineHeight="base"
                    size="4xl"
                    mb={20}
                    pt={28}
                    color="brand.one"
                    variant="pri"
                  >
                    <a id="development">Development</a>
                  </Heading>
                  <Flex flexDirection="row" flexWrap="wrap" mb={20}>
                    <Box
                      pr={{ base: 0, md: 6 }}
                      flexGrow="1"
                      flexBasis={{ base: '100%', md: '50%' }}
                    >
                      <Heading as="h5" mb={6} color="brand.one">
                        What we do
                      </Heading>
                      <Text maxWidth="500px" lineHeight="base" fontSize="xl" color="brand.one">
                        Performant development with React.js, Gatsby.js,
                        Next.js, Node.js and Python
                      </Text>
                      <UnorderedList mt={4}>
                        <ListItem>
                          Modern development frameworks, patterns and practices
                        </ListItem>
                        <ListItem>Blazing fast performance</ListItem>
                        <ListItem>Secure</ListItem>
                        <ListItem>Custom API integrations</ListItem>
                      </UnorderedList>
                    </Box>
                    <Box
                  p={20}
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  flexWrap="wrap"
                >
                  {Logos.map((l, i) => (
                  <Box key={generate()} 
                  width="200px"
                  maxW="200px" 
                  maxH="150px" 
                  m={4}>
                  {l}
                </Box>  
                  ))}
                  
                </Box>
                  </Flex>
                </Box>
            
              </Flex>
            </Container>
          </Box>
          <Box minHeight="400px" height="auto">
            <Container maxW="container.xl">
              <Heading
                as="h3"
                lineHeight="base"
                size="4xl"
                mb={20}
                pt={28}
                variant="pri"
              >
                <a id="search-engine-optimized">Search Engine Optimized</a>
              </Heading>
              <Flex flexDirection="row" flexWrap="wrap" pb={20}>
                <Box
                  pr={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: '50%' }}
                >
                  <Heading as="h5" mb={6}>
                    What we do
                  </Heading>
                  <Text maxWidth="500px" lineHeight="base" fontSize="xl" >
                    We ensure your web presence is discoverable
                  </Text>
                  <UnorderedList mt={4}>
                    <ListItem>Technical SEO for Google and Bing</ListItem>
                    <ListItem>Google and Bing analytics integrations</ListItem>
                    <ListItem>On page SEO</ListItem>
                    <ListItem>Content strategy and copywriting</ListItem>
                  </UnorderedList>
                </Box>
                <Box
                  pl={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '100%', md: '50%' }}
                ></Box>
              </Flex>
            </Container>
          </Box>
          <Box
            minHeight="400px"
            height="auto"
            color="brand.one"
            backgroundColor="brand.five"
          >
            <Container maxW="container.xl">
              <Flex display="flex" justifyContent="flex-end" flexWrap="wrap">
                <Box flexGrow="1" flexBasis={{ base: '100%', md: '50%' }}>
                  <Heading
                    as="h3"
                    lineHeight="base"
                    size="4xl"
                    mb={20}
                    pt={28}
                    color="brand.one"
                    variant="pri"
                  >
                    <a id="business-integrations">Business Integrations</a>
                  </Heading>
                  <Flex flexDirection="row" flexWrap="wrap" pb={20}>
                    <Box pr={{ base: 0, md: 6 }} flexGrow="1">
                      <Heading as="h5" mb={6} color="brand.one">
                        What we do
                      </Heading>
                      <Text maxWidth="500px" lineHeight="base" fontSize="xl" color="brand.one">
                        We set up your business to succeed
                      </Text>
                      <UnorderedList mt={4}>
                        <ListItem>
                          Integrations with CMS (content management system)
                        </ListItem>
                        <ListItem>
                          Lead management CRM (customer relationship management)
                        </ListItem>
                        <ListItem>
                          Integrations and automatons with email marketing
                          platforms
                        </ListItem>
                        <ListItem>
                          Ecommerce inventory and fulfillment management
                        </ListItem>
                        <ListItem>Booking management services</ListItem>
                      </UnorderedList>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  pl={{ base: 0, md: 6 }}
                  flexGrow="1"
                  flexBasis={{ base: '0%', md: '50%' }}
                  position="relative"
                >
                  <Box
                    position="absolute"
                    right="0px"
                    opacity={{ base: '.2', md: '.5' }}
                    transform="scaleX(-1)"
                  >
                    <MonkeyOne />
                  </Box>
                </Box>
              </Flex>
            </Container>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export const query = graphql`
  query MyQuery {
    brandShowcaseImage: allFile(
      filter: { relativePath: { regex: "images/showcase/brand/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    designShowcaseImage: allFile(
      filter: { relativePath: { regex: "images/showcase/design/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default services;
