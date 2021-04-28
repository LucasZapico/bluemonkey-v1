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
  >
    <Container maxW="container.xl" position="relative">
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        right="-20%"
        bottom="0"
        transform="scaleX(-1)"
      >
        <ScrollAniMonkey inOn="-300" outOn="-100">
          <MonkeyOne />
        </ScrollAniMonkey>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        right="10%"
        bottom="0"
        transform="scaleX(-1)"
      >
        <ScrollAniMonkey inOn="-300" outOn="0">
          <MonkeyOneTwo />
        </ScrollAniMonkey>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        right="50%"
        bottom="0"
        transform="scaleX(-1)"
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
        mb={20}
      >
        Blue Monkey Makes....
      </Heading>
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
                size="3xl"
                lineHeight="base"
                mb={10}
                color="brand.one"
              >
                ...custom digital presences that are engaging, performant, and
                SEO optimized.
              </Heading>
            </Box>
          </Box>
        </ScrollAniFadeIn>
      </Container>

      {/* <Box
        p={{ base: 0, sm: 10 }}
        bg="brand.five"
        minH="500px"
        flexBasis={{ base: '100%', md: '40%' }}
      >
        <Container maxW="container.xl">
          <Box maxWidth={{ base: '100%', md: '650px' }}>
            <Heading as="h3" size="xl" lineHeight="base" color="brand.one">
              Blue Monkey is a{' '}
              <ChLink to="the-launch" color="brand.one">
                launch pad for entrepreneurs and small business
              </ChLink>
              . We specialize in getting you coverage across{' '}
              <ChLink to="why-branding" color="brand.one">
                {' '}
                branding
              </ChLink>
              ,{' '}
              <ChLink to="why-branding" color="brand.one">
                web presence
              </ChLink>
              ,{' '}
              <ChLink color="brand.one" to="why-branding">
                development
              </ChLink>{' '}
              and{' '}
              <ChLink to="why-branding" color="brand.one">
                business integrations
              </ChLink>
              .
            </Heading>
          </Box>
        </Container>
      </Box> */}
    </Flex>
  </Flex>
);

const SectionOne = ({ data }) => (
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
        flexBasis={{ base: '100%', md: '100%', lg: '50%', xl: '40%' }}
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
        flexBasis={{ base: '100%', md: '100%', lg: '50%', xl: '60%' }}
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

const FAQSection = ({ data }) => (
  <Container maxW="container.xl">
    <ScrollAniFadeIn>
      <Flex flexWrap="wrap" minH="700px" py={40} flexGrow="1">
        <Box
          minHeight="400px"
          height="auto"
          border="2px"
          borderColor="brand.three"
          flexBasis={{ base: '100%', md: '50%' }}
          p={6}
        >
          <Heading as="h3" lineHeight="base" mb={6} minHeight="150px">
            <a id="what-is-hynotherapy">What Is Hypnotherapy?</a>
          </Heading>
          <Text lineHeight="base" fontSize="xl">
            Hypnotherapy is a natural state of mind with the extraordinary
            quality of mental and physical relaxation with numerous benefits.
          </Text>
        </Box>
        <Box
          minHeight="400px"
          height="auto"
          border="2px"
          borderColor="brand.three"
          flexBasis={{ base: '100%', md: '50%' }}
          p={6}
        >
          <Heading as="h3" lineHeight="base" mb={6} minHeight="150px">
            <a id="is-hynotherapy-right-for-you">
              Is Hypnotherapy Right For You?
            </a>
          </Heading>
          <Text lineHeight="base" fontSize="xl">
            If you're suffering from anxiousness, emotions related to pain or
            ready to achieve higher personal or professional goals? Hypnotherapy
            may be a great fit for you.
          </Text>
        </Box>
        <Box
          minHeight="400px"
          height="auto"
          border="2px"
          borderColor="brand.three"
          flexBasis={{ base: '100%', md: '50%' }}
          p={6}
        >
          <Heading as="h3" lineHeight="base" mb={6} minHeight="150px">
            <a id="what-you-can-expect"> What You Can Expect?</a>
          </Heading>
          <Text lineHeight="base" fontSize="xl">
            Clients experience transformative results ranging from, relief from
            stress and anxiousness to personal growth and development.
          </Text>
        </Box>
        <Box
          minHeight="400px"
          height="auto"
          border="2px"
          borderColor="brand.three"
          flexBasis={{ base: '100%', md: '50%' }}
          p={6}
        >
          <Heading as="h3" lineHeight="base" mb={6} minHeight="150px">
            <a id="what-hypnotherapy-can-do">What Hypnotherapy Can Do?</a>
          </Heading>
          <Box lineHeight="base" fontSize="xl">
            <UnorderedList>
              <ListItem>Enthusiasm for Life</ListItem>
              <ListItem>Build Confidence and Purpose</ListItem>
              <ListItem>Achieve Business Goals</ListItem>
              <ListItem>Increase Quality of Sleep</ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </ScrollAniFadeIn>
  </Container>
);

const PricingSection = ({ data }) => (
  <Box minH="700px" py={20} bg="brand.one">
    <Container maxW="container.xl">
      <Heading as="h3" size="2xl" lineHeight="base" mb={6}>
        Session Pricing
      </Heading>

      <Grid
        templateColumns={{ base: 'repeat(4,1fr)' }}
        templateRows={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      >
        {sessions.map((s, i) => (
          <GridItem
            rowSpan={{ base: '1' }}
            colSpan={{ base: '4', md: '2', lg: '1' }}
            key={i}
            border="2px"
            borderColor="brand.three"
            p={6}
            minW="200px"
          >
            <Heading as="h4" lineHeight="base">
              {s.name}
            </Heading>
            <Heading as="h4" size="2xl" lineHeight="base" mb={0}>
              {s.price}
            </Heading>
            {s.discount ? (
              <Heading as="h6" size="sm" lineHeight="base">
                (Save, {s.discount})
              </Heading>
            ) : undefined}
          </GridItem>
        ))}
      </Grid>

      <Flex
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems="center"
        flexWrap="wrap"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Link to="/schedule">
          <Button size="lg" px={8} my={6} variant="btnTwo">
            Schedule a Free 20 min Consultation
          </Button>
        </Link>
        <Box maxWidth="400px" my={6}>
          <Text lineHeight="base">
            If you're a veteran, first responder, senior citizen or person under
            the age of 17 in Edmonds, WA, ask about special discounts on your
            hypnotherapy service.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export const IndexPage = ({ data }) => {
  const ref = useRef();

  return (
    <Layout>
      <div ref={ref}>
        {/* <Box
          position="fixed"
          // opacity="0.3"
          top="0px"
          width="100vw"
          height="auto"
          minHeight="100vh"
          zIndex="-1"
        >
          <Img
            style={{ height: '100vh' }}
            fit="cover"
            fluid={data.bgImage.childImageSharp.fluid}
          />
        </Box> */}
        <Box minH="700px" pt={28}>
          <Hero data={data} />
          <SectionOne data={data} />
          {/* <ProfileSection data={data} /> */}
          {/* <FAQSection data={data} /> */}
          {/* <PricingSection data={data} /> */}
          {/* <Flex
            width="100%"
            zIndex="0"
            background="brand.six"
            p={4}
            justifyContent="space-between"
          >
            <Container maxWidth="container.xl">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Box m={4}>
                  <Heading as="h5" size="md">
                    $50 off all sessions and packages for the month
                    of&nbsp;April
                  </Heading>
                </Box>
              </Flex>
            </Container>
          </Flex> */}
        </Box>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "claire-profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
        fluid(maxWidth: 1020) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseDesignImageTwo: file(
      relativePath: { eq: "showcase/design/web-ui-luv-coffee.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1020) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcaseDesignImageOne: file(
      relativePath: { eq: "showcase/design/web-ui-yoga-of-words.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1020) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
