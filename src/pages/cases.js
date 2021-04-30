import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Layout, ScrollAniFadeIn, LinkOne } from '../components';
import { useSpring, animated as a } from 'react-spring';
import { graphql, Link } from 'gatsby';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';

const cases = [1, 2, 3, 4, 5];

const CasesPage = ({ data }) => {
  console.log('da', data);

  return (
    <Box py={40} zIndex="3">
      <Container>
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
      </Container>
      {data.cases.edges.map((c) => (
        <Container>
          <ScrollAniFadeIn>
            <Box
              height={{ base: '400px' }}
              width={{ base: '300px', md: '600px' }}
            >
              <Img
                style={{ width: '100%' }}
                fluid={c.node.frontmatter.featuredImg.childImageSharp.fluid}
                alt="A dinosaur"
              />
            </Box>
            <Link to={c.node.frontmatter.path}>{c.node.frontmatter.title}</Link>
          </ScrollAniFadeIn>
        </Container>
      ))}
    </Box>
  );
};

export const query = graphql`
  query {
    cases: allMdx(filter: { fileAbsolutePath: { regex: "/cases/" } }) {
      edges {
        node {
          id
          frontmatter {
            date_created
            last_modified
            path
            featuredImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;

export default CasesPage;
