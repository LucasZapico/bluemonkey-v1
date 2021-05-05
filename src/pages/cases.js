import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import { Layout, ScrollAniFadeIn, LinkOne } from '../components';
import { useSpring, animated as a } from 'react-spring';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';

const cases = [1, 2, 3, 4, 5];

const CasesPage = (props) => {
  console.log('da', props);
  const { data } = props;

  return (
    <Box zIndex="3">
      {/* <Container>
        <Heading
          as="h1"
          maxWidth="800px"
          fontFamily="montas-semibold"
          fontSize={{
            base: '90',
            sm: '90',
            md: '100',
            lg: '80',
            xl: '110',
          }}
          lineHeight="base"
          mb={20}
        >
          Our Work
        </Heading>
      </Container> */}
      <Box
        minH="500px"
        zIndex="1"
        bgGradient="linear(to-r, brand.three, brand.five)"
      >
        <Flex
          justifyContent="space-between"
          flexWrap="wrap"
          py={40}
          bgGradient="linear(to-b, brand.two 5%, brand.three 20%, brand.five 25%)"
          bg="brand.five"
        >
          <Container maxW="container.xl">
            <ScrollAniFadeIn>
              <Box
                py={{ base: 0, sm: 20 }}
                flexBasis={{ base: '100%', md: '60%' }}
              >
                <Box maxWidth="650px">
                  <Heading
                    as="h3"
                    fontSize={{
                      base: '80',
                      sm: '90',
                      md: '100',
                      lg: '80',
                      xl: '110',
                    }}
                    fontFamily="montas-semibold"
                    lineHeight="base"
                    zIndex="1"
                    color="brand.one"
                    pb={10}
                  >
                    Our Work
                  </Heading>
                </Box>
              </Box>
            </ScrollAniFadeIn>
          </Container>
          {data.cases.nodes.map((c) => (
            <Container mb={10}>
              <ScrollAniFadeIn>
                <Heading
                  as="h3"
                  size="xl"
                  fontFamily="montas-semibold"
                  lineHeight="base"
                  zIndex="1"
                  color="brand.one"
                  pb={6}
                >
                  {c.title}
                </Heading>
                <Box maxWidth="400px" mb={4}>
                  <Heading size="md" color="brand.one">
                    Services
                  </Heading>
                  {c.content.deliverables.map((s) => (
                    <Text
                      size="md"
                      display="inline"
                      lineHeight="base"
                      color="brand.one"
                    >
                      {s},{' '}
                    </Text>
                  ))}
                </Box>

                <Link to={c.path}>
                  <Box height="auto" overflow="hidden" mb={10}>
                    <Img
                      fluid={c.images.featured[0].src.childImageSharp.fluid}
                      alt={c.images.featured[0].alt}
                    />
                  </Box>
                </Link>
              </ScrollAniFadeIn>
            </Container>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export const query = graphql`
  query {
    cases: allWorkYaml {
      nodes {
        images {
          featured {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 1020) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        data_created
        id
        isdraft
        link
        path
        subheader
        title
        isComingSoon
        last_modified
        content {
          categories
          deliverables
        }
      }
    }
  }
`;

export default CasesPage;
