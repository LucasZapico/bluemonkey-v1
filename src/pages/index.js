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
import { Layout, ScrollAnimation, LinkThree } from '../components/index';

const sessions = [
  {
    name: 'Single Session',
    price: '$175',
  },
  {
    name: 'Three Sessions',
    price: '$475',
    discount: '$50',
  },
  {
    name: 'Six Sessions',
    price: '$840',
    discount: '$210',
  },
  {
    name: 'Ten Sessions',
    price: '$1315',
    discount: '$435',
  },
];

const Promotional = () => (
  <Flex
    minHeight="100px"
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
          <Heading as="h5" size="lg">
            $50 off all sessions and packages for the month of&nbsp;April
          </Heading>
        </Box>
        <Box m={4}>
          <Link to="/schedule">
            <Button size="lg" px={8} variant="btnTwo">
              Schedule a Free Consultation
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  </Flex>
);

const Hero = ({ data }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    mb={20}
    minH="700px"
    zIndex="1"
  >
    <Container maxW="container.xl" position="relative">
      <Box position="absolute" width="130vw">
        <Heading
          as="h3"
          marginTop="-10%"
          marginLeft="-10%"
          opacity="0.1"
          fontSize={{
            base: '120',
            sm: '120',
            md: '140',
            lg: '180',
          }}
        >
          Plan | Design | Develope | Optimize | Iterate
        </Heading>
      </Box>

      <Heading
        as="h1"
        fontWeight="light"
        maxWidth="800px"
        fontSize={{
          base: '120',
          sm: '120',
          md: '140',
          lg: '175',
        }}
        mb={40}
      >
        Blue Monkey Makes
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
    <Box p={10}>
      <Container maxW="container.xl">
        <Heading as="h3" size="2xl" lineHeight="base" maxWidth="600px" mb={10}>
          We create custom digital presences that are engaging, performant and
          SEO optimized.
        </Heading>
        <Heading as="h3" size="md" lineHeight="base">
          Blue Monkey is a launch pad for entrepreneurs and small business. We
          specialize in getting you coverage across branding, web presence,
          development and business integrations.
        </Heading>
      </Container>
    </Box>
  </Flex>
);

const SectionOne = ({ data }) => (
  <Box minH="500px" zIndex="1" py={10}>
    <Container maxW="container.xl">
      <Flex
        // backgroundColor="brand.one"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        p={10}
        position="relative"
      >
        <Box flexBasis={{ base: '100%', md: '50%' }} mb={20}>
          <ScrollAnimation>
            <Box mb={10} mr={10}>
              <Heading as="h3" size="2xl" lineHeight="base" zIndex="1" pb={10}>
                Services
              </Heading>
              <Heading size="xl" lineHeight="base">
                We do a lot and that is intentional. We are a one stop shop for
                brand, design, development, SEO and business&nbsp;integrations.
              </Heading>
            </Box>
          </ScrollAnimation>
          <ScrollAnimation>
            <Heading as="h3" size="2xl" lineHeight="base" zIndex="1" pb={10}>
              Readme
            </Heading>
            <Heading size="md" lineHeight="base">
              We believe there is a threshold for being competitive in the
              market and a lot of businesses spend good money and time trying to
              get there. Worst case being mislead by agencies and firms that
              charge more and deliver less. That's why we are who we are.
            </Heading>
          </ScrollAnimation>
        </Box>
        <Box flexBasis={{ base: '100%', md: '50%' }}>
          <Box mb={6}>
            <LinkThree href="/services/#branding">
              Branding
              <ArrowForwardIcon />
            </LinkThree>
          </Box>
          <Box mb={6}>
            <LinkThree href="/services/#design">
              Design
              <ArrowForwardIcon />
            </LinkThree>
          </Box>
          <Box mb={6}>
            <LinkThree href="/services/#development">
              Development
              <ArrowForwardIcon />
            </LinkThree>
          </Box>
          <Box mb={6}>
            <LinkThree href="/services/#seo-and-business-integrations">
              SEO and Business Integrations
              <ArrowForwardIcon />
            </LinkThree>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const ProfileSection = ({ data }) => (
  <Box minH="700px" py={20}>
    <Container maxW="container.xl">
      <Flex
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        justifyContent="space-between"
        flexGrow="1"
        pos="relative"
      >
        <Box
          zIndex="-1"
          bg="brand.one"
          height={{ base: '0%', md: '100%' }}
          width="100%"
          top="-10%"
          left="-20%"
          position="absolute"
        />
        <ScrollAnimation>
          <Box
            flexBasis="50%"
            mb={20}
            mr={{ md: 6 }}
            pos="relative"
            maxWidth="650px"
          >
            <Heading
              fontWeight="light"
              size="3xl"
              as="h3"
              lineHeight="base"
              mb={6}
            >
              Hi, I'm Claire
            </Heading>
            <Heading as="h3" lineHeight="base" mb={6}>
              My passion is to assist people to live empowered, fulfilled and
              happy lives
            </Heading>
            <Text lineHeight="base" fontSize="xl">
              As a graduate of the Hypnotherapy Academy of America, I specialize
              using a client focused, results oriented approach to help create a
              tangible and meaningful environment which is compassionate and
              confidential.
            </Text>
          </Box>
        </ScrollAnimation>
        <ScrollAnimation>
          <Box
            flexBasis="50%"
            position="relative"
            width="100%"
            ml={{ md: 6 }}
            zIndex="0"
          >
            {' '}
            {/* <Box
            zIndex="0"
            bg="brand.six"
            height="100%"
            width="100%"
            top="-60px"
            left="-20px"
            position="absolute"
          /> */}
            <Img zIndex="1" fluid={data.profileImage.childImageSharp.fluid} />
            <Text>
              Claire Morency CHT | Connect@ClaireMorencyHypnotherapy.com |
              415.747.1177
            </Text>
          </Box>
        </ScrollAnimation>
      </Flex>
      <Box mt={20}>
        <Heading as="h4" size="md">
          Clinical Hypnotherapist Claire Morency offers hypnotherapy services in
          Edmonds, WA.
        </Heading>
      </Box>
    </Container>
  </Box>
);

const FAQSection = ({ data }) => (
  <Container maxW="container.xl">
    <ScrollAnimation>
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
          <Text lineHeight="base" fontSize="xl">
            <UnorderedList>
              <ListItem>Enthusiasm for Life</ListItem>
              <ListItem>Build Confidence and Purpose</ListItem>
              <ListItem>Achieve Business Goals</ListItem>
              <ListItem>Increase Quality of Sleep</ListItem>
            </UnorderedList>
          </Text>
        </Box>
      </Flex>
    </ScrollAnimation>
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
  }
`;

export default IndexPage;
