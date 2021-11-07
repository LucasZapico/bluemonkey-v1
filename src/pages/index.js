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
  Link
} from '@chakra-ui/react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiArrowUpRight, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import {
  BlurBlobOne,
  BlurBlobTwo,
  BlurBlobThree,
} from '../components/flare/blur-blobs'

import {
  AnimatedFadeUpBox,
  ScrollAniMonkey, 
  LinkThree,
  LinkOne,
  BoxButton,
} from '../components/index';
import MonkeyOne from '../assets/monkey_1.svg';
import MonkeyOneTwo from '../assets/monkey_1_2.svg';
import MonkeyOneThree from '../assets/monkey_1_3.svg';
import MonkeyTwo from '../assets/monkey_2.svg';
import MonkeyThree from '../assets/monkey_3.svg';
import GridPattern from '../assets/grid-patter.svg';
import BackgroundIll from '../assets/background.svg'

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
        variant="pri"
        size="5xl"
      >
        Blue Monkey Makes...
      </Heading>
      <Heading as="h2" size="xl" lineHeight="base" variant="sec" mb={20} maxWidth="600px">
        ...custom digital presences that are engaging, performant, and search
        engine&nbsp;optimized.
      </Heading>
      <Box mb={10} width="475px">
        <BoxButton as={GatsbyLink} to="/#start-a-conversation" fontWeight="medium">
          Start A Conversation
          <FiArrowDown />
        </BoxButton>
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
      
        <AnimatedFadeUpBox showOffset="300" py={{ base: 0, sm: 20 }} flexBasis={{ base: '100%', md: '60%' }}>
          <Box maxWidth="650px">
            <Heading
              as="h3"
              variant="pri"
              size="4xl"
              lineHeight="base"
              zIndex="1"
              color="brand.zero"
              pb={10}
            >
              Our Work
            </Heading>
            <Link as={GatsbyLink} to="/cases" variant="light" w="120px">
              See More Work
            </Link>
          </Box>
        </AnimatedFadeUpBox>
    </Container>
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(5, 1fr)" gap={12}>
        {data.cases.nodes.map((c, i) => (
          <AnimatedFadeUpBox showOffset="300" 
          as={GridItem} 
          colStart={{base: 1, md: `${i % 2 === 0 ? 1 : 3}`}}
          colSpan={{ base: 5, md: `${i % 2 === 0 ? 3 : 5}`}} mb={10}>
              <Heading
                as="h4"
                size="xl"
                lineHeight="base"
                zIndex="1"
                color="brand.zero"
                variant="pri"
                
              >
                {!c.isComingSoon ? c.title : `${c.title} - Coming Soon`}
              </Heading>
              <Box maxWidth="400px" mb={4}>
                <Heading 
                as="h5" 
                size="lg" 
                color="brand.zero" 
                mb={0}>
                  Services
                </Heading>
                {c.content.deliverables.map((s, i) => (
                  <Text
                    size="sm"
                    display="inline"
                    lineHeight="base"
                    color="brand.zero"
                  >
                    {s}
                    {c.content.deliverables.length - 1 === i ? '' : ', '}
                  </Text>
                ))}
              </Box>
              {!c.isComingSoon ? (
                <Box 
                as={GatsbyLink} 
                to={c.path} 
                >
                  <Box
                  overflow="hidden" 
                  position='relative' 
                     height="auto"  mb={10}>
                    <Img
                      fluid={c.images.featured[0].src.childImageSharp.fluid}
                      alt=""
                    />
                    <Box height="800px" width="900px" top="0px" left="0px" position="absolute" opacity="0.5" backgroundColor={i % 2 === 0 ? 'brand.four' : 'brand.four'}
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  _hover={{opacity: '0'}}
                  _active={{opacity: '0'}}
                  _focus={{opacity: '0'}} />
                </Box>
                  </Box>
                  
              ) : (
                <Box
                  height="auto"
                  overflow="hidden"
                  mb={10}
                  filter={c.isComingSoon ? 'blur(10px)' : 'blur(0px)'}
                >
                  <Img
                    fluid={c.images.featured[0].src.childImageSharp.fluid}
                    alt=""
                  />
                </Box>
              )}
          </AnimatedFadeUpBox>
        ))}
      </Grid>
      <Flex>
      <Link as={GatsbyLink} to="/cases" variant="light" fontWeight="medium" >
              See More Work
            </Link>
            
            
            </Flex>
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
    bgGradient="linear(to-br, brand.zero , brand.two )"
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
          variant="pri"
          size="5xl"
          lineHeight="base"
          zIndex="1"
          pb={10}
        >
          Services
        </Heading>
        <Flex flexWrap="wrap">
          <AnimatedFadeUpBox showOffset="300"
            py={{ base: 0, md: 20 }}
            flexBasis={{ base: '100%', md: '50%' }}
            flexGrow="1"
          >
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
            
          </AnimatedFadeUpBox>
          <Box flexBasis={{ base: '100%', md: '50%' }} flexGrow="1">
            
              <AnimatedFadeUpBox showOffset="300" ml={-4} maxWidth="600px" mx={{ base: 'auto' }}>
                <Box mb={10}>
                  <BoxButton as={GatsbyLink} fontWeight="medium" to="/services/#branding">
                    Branding
                    <FiArrowUpRight />
                  </BoxButton>
                </Box>
                <Box mb={10}>
                  <BoxButton as={GatsbyLink} fontWeight="medium" to="/services/#design">
                    Design
                    <FiArrowUpRight />
                  </BoxButton>
                </Box>
                <Box mb={10}>
                  <BoxButton as={GatsbyLink} fontWeight="medium" to="/services/#development">
                    Development
                    <FiArrowUpRight />
                  </BoxButton>
                </Box>
                <Box mb={10}>
                  <BoxButton fontWeight="medium" to="/services/#search-engine-optimized">
                    Search Engine Optimized
                    <FiArrowUpRight />
                  </BoxButton>
                </Box>
                <Box mb={10}>
                  <BoxButton as={GatsbyLink} fontWeight="medium" to="/services/#search-engine-optimized">
                    Business Integrations
                    <FiArrowUpRight />
                  </BoxButton>
                </Box>
              </AnimatedFadeUpBox>
            
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
      <Box zIndex="-1" position="absolute" top="0" left="0"   
      width={{base: 'auto', md: '100vw'}}
      height={{base: '100vh', md: 'auto'}}
      >
    <BackgroundIll/>
    </Box>
        <Hero data={data} />
        <main>
          <OurWorkSection data={data} />
          <ServicesSection data={data} />
        </main>
        {/* <Flare /> */}
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
    cases: allWorkYaml( sort: {fields: date_created, order: DESC} limit: 6)  {
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
