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
import { FiArrowUpRight, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import {
  BlurBlobOne,
  BlurBlobTwo,
  BlurBlobThree,
} from '../components/flare/blur-blobs'

import {
  Layout,
  ScrollAniFadeIn,
  ScrollAniMonkey,
  LinkThree,
  LinkOne,
} from '../components/index';
import MonkeyOne from '../assets/monkey_1.svg';
import MonkeyOneTwo from '../assets/monkey_1_2.svg';
import MonkeyOneThree from '../assets/monkey_1_3.svg';
import MonkeyTwo from '../assets/monkey_2.svg';
import MonkeyThree from '../assets/monkey_3.svg';
import GridPattern from '../assets/grid-patter.svg';
import BackgroundIll from '../assets/backgroound.svg'

const Flare = () => (
  <Box
    position="absolute"
    top="0%"
    zIndex="-1"
    left="0%"
    height="100%"
    width="100%"
    overflow="hidden"
    // bgGradient="linear(to-br, brand.zero, brand.two)"
  >
    <Box position="relative" height="100%" width="100%" opacity="0.7">
      <Box pos="absolute" className="home-blob-one" right="0px" top="0px">
        <BlurBlobOne />
      </Box>{' '}
      {/* <Box pos="absolute" left="0px" top="0px" className="home-blob-two">
        <BlurBlobTwo />
      </Box>{' '} */}
      <Box pos="absolute" left="0px" top="0px" className="home-blob-two">
        <BlurBlobThree />
      </Box>
    </Box>
  </Box>
)


const Hero = ({ data }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    minH="700px"
    zIndex="0"
    pos="relative"
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
        
        fontFamily="montas-semibold"
        fontSize={{
          base: '70',
          sm: '120',
          md: '140',
          lg: '175',
        }}
      >
        Blue Monkey Makes....
      </Heading>
      <Heading as="h2" size="xl" lineHeight="base" mb={20} maxWidth="600px">
        ...custom digital presences that are engaging, performant, and search
        engine&nbsp;optimized.
      </Heading>
      <Box mb={10} width="450px">
        <LinkThree to="/#start-a-conversation">
          Start A Conversation
          <FiArrowDown />
        </LinkThree>
      </Box>
      <Box
        zIndex="-1"
        height={{ base: '0%', md: '70%' }}
        
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
  <Box minH="500px" py={20} zIndex="1" className="aurora dark">
    <Container maxW="container.xl">
      <ScrollAniFadeIn>
        <Box py={{ base: 0, sm: 20 }} flexBasis={{ base: '100%', md: '60%' }}>
          <Box maxWidth="650px">
            <Heading
              as="h3"
              fontSize={{
                base: '70',
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
            <Box className="link-one dark" w="120px">
              <LinkOne to="/cases">See More Work</LinkOne>
            </Box>
          </Box>
        </Box>
      </ScrollAniFadeIn>
    </Container>
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(5, 1fr)" gap={12}>
        {data.cases.nodes.map((c, i) => (
          <GridItem colSpan={{ base: 5, md: `${i % 3 === 0 ? 3 : 2}` }} mb={10}>
            <ScrollAniFadeIn>
              <Heading
                as="h4"
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
                <Heading as="h5" size="md" color="brand.one">
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
                    {c.content.deliverables.length - 1 === i ? '' : ', '}
                  </Text>
                ))}
              </Box>
              {!c.isComingSoon ? (
                <Link to={c.path}>
                  <Box height="auto" overflow="hidden" mb={10}>
                    <Img
                      fluid={c.images.featured[0].src.childImageSharp.fluid}
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
    <Box
      
      p={{ base: 0, sm: 10 }}
      height="auto"
      flexGrow={1}
      flexBasis={{ base: '100%', md: '100%', lg: '40%', xl: '40%' }}
      pb={20}
    >
   
    </Box>
  </Box>
);

const ServicesSection = ({ data }) => (
  <Box
    minH="500px"
    zIndex="1"
    py={20}
    bgGradient="linear(to-br, brand.one , brand.two )"
  >
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      position="relative"
    >
      <Container maxW="container.xl">
        <Heading
          as="h3"
          fontSize={{
            base: '70',
            sm: '90',
            md: '100',
            lg: '80',
            xl: '110',
          }}
          fontFamily="montas-semibold"
          lineHeight="base"
          zIndex="1"
          pb={10}
        >
          Services
        </Heading>
        <Flex flexWrap="wrap">
          <Box
            py={{ base: 0, md: 20 }}
            flexBasis={{ base: '100%', md: '50%' }}
            flexGrow="1"
          >
            <ScrollAniFadeIn>
              <Heading
                size="3xl"
                m="auto"
                as="h4"
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
                We are a one stop shop for frugal and{' '}
                <Box display="inline">
                  competitive:&nbsp;
                  <Box display={{ base: 'none', md: 'inline' }}>
                    <FiArrowRight style={{ display: 'inline' }} />
                  </Box>
                </Box>
                <Box display={{ base: 'inline', md: 'none' }}>
                  <FiArrowDown style={{ display: 'inline' }} />
                </Box>
              </Heading>
            </ScrollAniFadeIn>
          </Box>
          <Box flexBasis={{ base: '100%', md: '50%' }} flexGrow="1">
            <ScrollAniFadeIn>
              <Box ml={-4} maxWidth="600px" mx={{ base: 'auto' }}>
                <Box mb={10}>
                  <LinkThree to="/services/#branding">
                    Branding
                    <FiArrowUpRight />
                  </LinkThree>
                </Box>
                <Box mb={10}>
                  <LinkThree to="/services/#design">
                    Design
                    <FiArrowUpRight />
                  </LinkThree>
                </Box>
                <Box mb={10}>
                  <LinkThree to="/services/#development">
                    Development
                    <FiArrowUpRight />
                  </LinkThree>
                </Box>
                <Box mb={10}>
                  <LinkThree to="/services/#search-engine-optimized">
                    Search Engine Optimized
                    <FiArrowUpRight />
                  </LinkThree>
                </Box>
                <Box mb={10}>
                  <LinkThree to="/services/#search-engine-optimized">
                    Business Integrations
                    <FiArrowUpRight />
                  </LinkThree>
                </Box>
              </Box>
            </ScrollAniFadeIn>
          </Box>
        </Flex>
      </Container>
    </Flex>
    
  </Box>
);

export const IndexPage = ({ data }) => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <Box minH="700px" position="relative" pt={28} zIndex="0">
      <Box zIndex="-1" position="absolute" top="0" left="0" width="100%" height="1000px">
    <BackgroundIll/>
    </Box>
        <Hero data={data} />
        <main>
          <OurWorkSection data={data} />
          <ServicesSection data={data} />
        </main>
        <Flare />
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
    cases: allWorkYaml( sort: {fields: date_created, order: ASC} limit: 6)  {
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
        date_created
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
