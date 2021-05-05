import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex, Box, Text, Container } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { ScrollAniFadeIn } from '../../components';
import GatsbyLogo from '../../assets/Gatsby-Logo.svg';

const contentData = {
  title:
    'Chancellor Consulting Group is a well established healthcare management consutling group with over 35 years in the industry.',
  summary:
    "They needed to give their web presense a modern face lift, while maintianing a clean professional tone. This included holding onto some original photography from the 90's.",
  services: ['branding', 'web-desgin', 'development', 'business integration'],
  branding:
    'We modernized the brand by leveraged the personality of a mature business pulling from depth of experience and refined tones.  Conveying established confidence and professionalism.',
  'web-design':
    'Once we had the established tone we create an experience for a modern audience with an emphasize on mobile and scalable content and ease of access to points of contact. ',
  development:
    'We used Gatsbyjs as our build framework, thus ensuring one of the fastest servicng content. ',
  'business-integration': '',
};

const ChancellorConsultingGroup = ({ data }) => {
  console.log('data', data);
  const { caseImages } = data;
  // console.log('data', data.caseImages);
  return (
    <Box py={40}>
      <Container maxW="container.md">
        <Heading
          as="h1"
          fontFamily="montas-semibold"
          bgGradient="linear(to-b, brand.three, brand.five)"
          bgClip="text"
          size="2xl"
          lineHeight="base"
          mb={10}
        >
          {contentData.title}
        </Heading>

        <Flex flexWrap="wrap">
          <Box flexBasis={{ base: '100%', md: '70%' }}>
            <Heading as="h3" mt={10} mb={6}>
              Summary
            </Heading>
            <Text pr={6} fontSize="2xl">
              {contentData.summary}
            </Text>
          </Box>
          <Box flexBasis={{ base: '100%', md: '30%' }}>
            <Heading mb={6} mt={10} as="h4">
              Services
            </Heading>
            {contentData.services.map((s, i) => s)}
          </Box>
        </Flex>
        <Box>
          <Heading as="h3" mt={10} mb={6}>
            Branding
          </Heading>
          <Text pr={6} fontSize="2xl">
            {contentData.branding}
          </Text>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={10}>
              <Img fluid={caseImages.nodes[0].childImageSharp.fluid} alt="" />
            </Box>
          </ScrollAniFadeIn>
        </Box>
        <Box>
          <Heading as="h3" mt={10} mb={6}>
            Web Design
          </Heading>
          <Text pr={6} fontSize="2xl">
            {contentData['web-design']}
          </Text>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={10}>
              <Img fluid={caseImages.nodes[1].childImageSharp.fluid} alt="" />
            </Box>
          </ScrollAniFadeIn>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={10}>
              <Img fluid={caseImages.nodes[2].childImageSharp.fluid} alt="" />
            </Box>
          </ScrollAniFadeIn>
        </Box>
        <Box>
          <Heading as="h3" mt={10} mb={6}>
            Development
          </Heading>
          <Text pr={6} fontSize="2xl">
            {contentData.development}
          </Text>
          <Box width="300px" my={6}>
            <GatsbyLogo />
          </Box>
        </Box>
        <Box>
          <Heading as="h3" mt={10} mb={6}>
            Business Integrations
          </Heading>
          <Text pr={6} fontSize="2xl">
            {contentData['business-integration']}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export const query = graphql`
  query {
    caseImages: allFile(
      filter: {
        absolutePath: { regex: "/images/showcase/work/chancellor-consulting/" }
      }
    ) {
      nodes {
        id
        childImageSharp {
          id
          fluid(maxWidth: 1020) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ChancellorConsultingGroup;
