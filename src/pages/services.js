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
import { Layout, ScrollAnimation, LinkThree } from '../components/index';

// const servicesCopy = [{ Branding: [] }];

// const Carousel = ({ images }) => {
//   const ref = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const nextSlide = () => {
//     if (currentSlide < images.length - 1) {
//       console.log(`ran time out + +,
//       ${currentSlide}
//       ${images.length}
//     `);
//       setCurrentSlide((prev) => {
//         console.log(prev + 1);
//         return prev + 1;
//       });
//     } else if (currentSlide === images.length - 1) {
//       console.log('update on lenght');
//       setCurrentSlide(0);
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {}, [currentSlide]);
//   return (
//     <Flex flexBasis={{ base: '100%', md: '50%' }} overflow="hidden">
//       <Box minWidth="100%" height="auto" key={images[currentSlide].node.id}>
//         <Img
//           fit="cover"
//           fluid={images[currentSlide].node.childImageSharp.fluid}
//         />
//       </Box>
//     </Flex>
//   );
// };

const services = ({ data }) => {
  console.log('data', data);
  return (
    <Layout>
      <Box pt={40}>
        <Container maxW="container.xl">
          <Heading
            fontFamily="montas-semibold"
            as="h1"
            lineHeight="base"
            mb={6}
            fontSize={{
              base: '90',
              sm: '90',
              md: '100',
              lg: '80',
              xl: '110',
            }}
          >
            Services
          </Heading>
          <Box minHeight="400px" height="auto">
            <Heading as="h3" lineHeight="base" mb={6} pt={28} size="2xl">
              <a id="branding">Branding</a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap">
              <Box>
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
              </Box>
              {/* <Carousel images={data.brandShowcaseImage.edges}></Carousel> */}
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

export const query = graphql`
  query MyQuery {
    brandShowcaseImage: allFile(
      filter: { relativePath: { regex: "showcase/brand/" } }
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
      filter: { relativePath: { regex: "showcase/design/" } }
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
