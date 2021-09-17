import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Layout, ScrollAniFadeIn, LinkOne } from '../components';
import { useSpring, animated as a } from 'react-spring';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';

const cases = [1, 2, 3, 4, 5];

const CasesPage = (props) => {
  const { data } = props;
  console.log('cases', data);

  return (
    <main>
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
        <Box className="aurora dark" minH="500px" zIndex="1">
          <Container maxW="container.xl">
            <Grid templateColumns="repeat(5, 1fr)" pt={40} gap={12}>
              <GridItem colSpan={{ base: 5, md: 3 }} maxW="container.xl">
                <ScrollAniFadeIn>
                  <Box
                    py={{ base: 0, sm: 20 }}
                    flexBasis={{ base: '100%', md: '60%' }}
                  >
                    <Box maxWidth="650px">
                      <Heading
                        as="h1"
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
              </GridItem>
              {data.cases.nodes.map((c, i) => (
                <GridItem
                  colSpan={{ base: 5, md: `${i % 3 === 0 ? 3 : 2}` }}
                  mb={10}
                >
                  <ScrollAniFadeIn>
                    <Heading
                      as="h2"
                      size="xl"
                      fontFamily="montas-semibold"
                      lineHeight="base"
                      zIndex="1"
                      color="brand.one"
                      pb={6}
                    >
                      {!c.isComingSoon ? c.title : `${c.title} - Coming Soon`}
                    </Heading>
                    <Box maxWidth="400px" mb={4}>
                      <Heading as="h3" size="md" color="brand.one">
                        Services
                      </Heading>
                      {c.content.deliverables.map((s, i) => (
                        <Text
                          size="md"
                          display="inline"
                          lineHeight="base"
                          color="brand.one"
                        >
                          {s}
                          {c.content.deliverables.length - 1 === i ? '' : `, `}
                        </Text>
                      ))}
                    </Box>

                    {!c.isComingSoon ? (
                      <Link to={c.path}>
                        <Box height="auto" overflow="hidden" mb={10}>
                          <Img
                            fluid={
                              c.images.featured[0].src.childImageSharp.fluid
                            }
                            alt=""
                          />
                        </Box>
                      </Link>
                    ) : (
                      <Box
                        height="auto"
                        overflow="hidden"
                        mb={10}
                        filter={c.isComingSoon ? 'blur(60px)' : 'blur(0px)'}
                      >
                        <Img
                          fluid={c.images.featured[0].src.childImageSharp.fluid}
                          alt=""
                        />
                      </Box>
                    )}
                  </ScrollAniFadeIn>
                </GridItem>
              ))}
            </Grid>
          </Container>
          <Flex justifyContent="space-between" flexWrap="wrap" pb={40}>
            <Container maxW="container.xl">
              <ScrollAniFadeIn>
                <Box
                  py={{ base: 0, sm: 20 }}
                  flexBasis={{ base: '100%', md: '60%' }}
                >
                  <Box maxWidth="650px">
                    <Heading
                      as="h3"
                      size="3xl"
                      fontFamily="montas-semibold"
                      lineHeight="base"
                      zIndex="1"
                      color="brand.one"
                      pb={10}
                    >
                      Side Projects
                    </Heading>
                  </Box>
                </Box>
              </ScrollAniFadeIn>
            </Container>
            <Container maxW="container.xl">
              <Flex
                flexWrap="wrap"
                justifyContent="flex-start
              "
              >
                {data.projects.edges.map((c) => (
                  <Box width="400px" mb={10} mr={10}>
                    <ScrollAniFadeIn>
                      <Heading
                        as="h2"
                        size="xl"
                        fontFamily="montas-semibold"
                        lineHeight="base"
                        zIndex="1"
                        color="brand.one"
                        pb={6}
                      >
                        {c.node.frontmatter.title}
                      </Heading>
                      <Box maxWidth="400px" mb={4}>
                        <Text color="brand.one" fontSize="md" lineHeight="base">
                          {c.node.frontmatter.subheader}
                        </Text>
                      </Box>

                      {/* <Link to={c.node.frontmatter.path}> */}
                      <Box height="auto" overflow="hidden" mb={10}>
                        <Img
                          fluid={
                            c.node.frontmatter.featuredImg[0].src
                              .childImageSharp.fluid
                          }
                          alt={c.node.frontmatter.featuredImg[0].alt}
                        />
                      </Box>
                      {/* </Link> */}
                    </ScrollAniFadeIn>
                  </Box>
                ))}
              </Flex>
            </Container>
          </Flex>
        </Box>
      </Box>
    </main>
  );
};

export const query = graphql`
  query {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/pages/projects/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            featuredImg {
              alt
              src {
                childImageSharp {
                  fluid(maxWidth: 1020) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date_created
            path
            subheader
            title
            last_modified
          }
        }
      }
    }
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
        date_created
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
