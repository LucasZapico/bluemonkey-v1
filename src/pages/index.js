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
import {
  Layout,
  ScrollAniFadeIn,
  ScrollAniMonkey,
  LinkThree,
} from '../components/index';
import MonkeyOne from '../assets/monkey_1.svg';
import MonkeyOneTwo from '../assets/monkey_1_2.svg';
import MonkeyOneThree from '../assets/monkey_1_3.svg';
import MonkeyTwo from '../assets/monkey_2.svg';
import MonkeyThree from '../assets/monkey_3.svg';

const Hero = ({ data }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    minH="700px"
    zIndex="1"
    bgGradient="linear(to-tr, brand.one , brand.two )"
  >
    <Container maxW="container.xl" position="relative">
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        left="-20%"
        bottom="0"
        opacity=".5"
        transform="scaleX(1)"
      >
        <ScrollAniMonkey inOn="-300" outOn="-100">
          <MonkeyOne />
        </ScrollAniMonkey>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        left="10%"
        bottom="0"
        transform="scaleX(1)"
        opacity=".5"
      >
        <ScrollAniMonkey inOn="-300" outOn="0">
          <MonkeyOneTwo />
        </ScrollAniMonkey>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        left="50%"
        bottom="0"
        transform="scaleX(1)"
        opacity=".5"
      >
        <ScrollAniMonkey inOn="0" outOn="400">
          <MonkeyOneThree />
        </ScrollAniMonkey>
      </Box>
      <Heading
        as="h1"
        maxWidth="800px"
        bgGradient="linear(to-r, brand.three, brand.five)"
        bgClip="text"
        fontFamily="montas-semibold"
        fontSize={{
          base: '80',
          sm: '120',
          md: '140',
          lg: '175',
        }}
      >
        Blue Monkey Makes....
      </Heading>
      <Heading as="h3" size="xl" lineHeight="base" mb={20} maxWidth="600px">
        ...custom digital presences that are engaging, performant, and search
        engine&nbsp;optimized.
      </Heading>
      <Box mb={10} width="400px">
        <LinkThree to="/#start-a-conversation">
          Start A Conversation
          <ArrowForwardIcon />
        </LinkThree>
      </Box>
      <Box
        zIndex="-1"
        height={{ base: '0%', md: '70%' }}
        bg="brand.one"
        width="600px"
        top="5%"
        left="-20%"
        position="absolute"
      />
      {/* </a.div> */}
    </Container>
  </Flex>
);

const OurWorkSection = ({ data }) => (
  <Box
    minH="500px"
    py={20}
    zIndex="1"
    bgGradient="linear(to-r, brand.three, brand.five)"
  >
    <Flex
      justifyContent="space-between"
      flexWrap="wrap"
      // bgGradient="linear(to-b, brand.two 5%, brand.three 20%, brand.five 25%)"
      bg="brand.five"
    >
      <Container maxW="container.xl">
        <ScrollAniFadeIn>
          <Box py={{ base: 0, sm: 20 }} flexBasis={{ base: '100%', md: '60%' }}>
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
                  alt=""
                />
              </Box>
            </Link>
          </ScrollAniFadeIn>
        </Container>
      ))}
    </Flex>
  </Box>
);

const ServicesSection = ({ data }) => (
  <Box minH="500px" zIndex="1">
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      position="relative"
    >
      <Box
        bgGradient="radial( brand.three 20%, brand.five )"
        // backgroundColor="brand.five"
        p={{ base: 0, sm: 10 }}
        height="auto"
        flexGrow={1}
        flexBasis={{ base: '100%', md: '100%', lg: '40%', xl: '40%' }}
        pb={20}
      >
        <Container maxWidth="container.xl" centerContent="true">
          <ScrollAniFadeIn>
            <Box mb={10} mr={10} position="relative">
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
                Services
              </Heading>
              {/* <Heading color="brand.one">
                We do it all so you don't have&nbsp;to.
              </Heading> */}
              <Box
                display={{ base: 'none', md: 'block' }}
                height="500px"
                position="relative"
              >
                <Heading
                  as="h3"
                  fontSize="lg"
                  lineHeight="base"
                  zIndex="1"
                  color="brand.one"
                  pb={10}
                  className="movy-text"
                >
                  Hover Around Here
                </Heading>
                <Box
                  position="absolute"
                  top="-20%"
                  left="40%"
                  width="100%"
                  height="auto"
                  className="clip-show-effect"
                >
                  <Link to="/services/#branding">
                    <Img
                      fit="cover"
                      fluid={data.showcaseBrandImageTwo.childImageSharp.fluid}
                    />
                  </Link>
                </Box>
                <Box
                  position="absolute"
                  top="20%"
                  left="20%"
                  width="100%"
                  height="auto"
                  className="clip-show-effect"
                >
                  <Link to="/services/#branding">
                    <Img
                      fit="cover"
                      fluid={data.showcaseBrandImage.childImageSharp.fluid}
                    />
                  </Link>
                </Box>
                <Box
                  left="-10%"
                  top="60%"
                  width="100%"
                  position="absolute"
                  height="auto"
                  className="clip-show-effect"
                >
                  <Link to="/services/#design">
                    <Img
                      fit="cover"
                      fluid={data.showcaseDesignImageOne.childImageSharp.fluid}
                    />
                  </Link>
                </Box>

                <Box
                  left="-10%"
                  top="40%"
                  width="100%"
                  position="absolute"
                  height="auto"
                  className="clip-show-effect"
                >
                  <Link to="/services/#design">
                    <Img
                      fit="cover"
                      fluid={data.showcaseDesignImageTwo.childImageSharp.fluid}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </ScrollAniFadeIn>
        </Container>
      </Box>
      <Box
        pb={20}
        flexGrow={1}
        flexBasis={{ base: '100%', md: '100%', lg: '50%', xl: '60%' }}
        bgGradient="linear(to-b, brand.one , brand.two )"
      >
        <Container maxW="container.xl">
          <ScrollAniFadeIn>
            <Heading
              py={{ base: 0, md: 20 }}
              px={{ base: 0, md: 10, lg: 10, xl: 20 }}
              size="3xl"
              m="auto"
              mb={{ base: 10, md: 'auto' }}
              mt={{ base: 10, md: 'auto' }}
              lineHeight="base"
              maxWidth="700px"
            >
              <Box
                position="absolute"
                right="-10%"
                bottom="0"
                transform="scaleX(1)"
              >
                {/* <MonkeyThree /> */}
              </Box>
              We are a one stop shop for frugal and competitive:
            </Heading>
            <Box ml={-4} maxWidth="600px" mx={{ base: 'auto' }}>
              <Box mb={10}>
                <LinkThree to="/services/#branding">
                  Branding
                  <ArrowForwardIcon />
                </LinkThree>
              </Box>
              <Box mb={10}>
                <LinkThree to="/services/#design">
                  Design
                  <ArrowForwardIcon />
                </LinkThree>
              </Box>
              <Box mb={10}>
                <LinkThree to="/services/#development">
                  Development
                  <ArrowForwardIcon />
                </LinkThree>
              </Box>
              <Box mb={10}>
                <LinkThree to="/services/#seo-and-business-integrations">
                  SEO and Business Integrations
                  <ArrowForwardIcon />
                </LinkThree>
              </Box>
            </Box>
          </ScrollAniFadeIn>
        </Container>
      </Box>
    </Flex>
  </Box>
);

export const IndexPage = ({ data }) => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <Box minH="700px" pt={28}>
        <Hero data={data} />
        <OurWorkSection data={data} />
        <ServicesSection data={data} />
      </Box>
    </div>
  );
};

export const query = graphql`
  query {
    bgImage: file(relativePath: { eq: "clouds-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseBrandImage: file(
      relativePath: { eq: "showcase/brand/brand-showcase-luv-coffee.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseBrandImageTwo: file(
      relativePath: {
        eq: "showcase/work/claire-morency-hypno/3-cmh-webdesign-showcase-2.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseDesignImageTwo: file(
      relativePath: { eq: "showcase/design/web-ui-luv-coffee.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseDesignImageOne: file(
      relativePath: { eq: "showcase/design/web-ui-yoga-of-words.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
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
        content {
          categories
          deliverables
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
      }
    }
  }
`;

export default IndexPage;
