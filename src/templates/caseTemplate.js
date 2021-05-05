import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex, Box, Text, Container } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { ScrollAniFadeIn, LinkOne } from '../components';
import GatsbyLogo from '../assets/Gatsby-Logo.svg';

import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosOpen,
} from 'react-icons/io';

const caseTemplate = (props, location) => {
  console.log('props', props);
  const { element } = props.pageContext;
  const { previous, node, next } = element;
  console.log('node', node);
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
          mb={16}
        >
          {node.content.title}
        </Heading>

        <Flex flexWrap="wrap">
          <Box flexBasis={{ base: '100%', md: '70%' }}>
            <Heading
              fontFamily="montas-semibold"
              as="h3"
              size="3xl"
              mt={16}
              mb={6}
            >
              Summary
            </Heading>

            <Text pr={6} fontSize="2xl">
              {node.content.summary}
            </Text>
          </Box>
          <Box flexBasis={{ base: '100%', md: '30%' }}>
            <Heading fontFamily="montas-semibold" mb={6} mt={16} as="h4">
              Services
            </Heading>
            {node.content.deliverables.map((s, i) => `${s}, `)}
          </Box>
        </Flex>
        <Box>
          <Heading
            fontFamily="montas-semibold"
            as="h3"
            size="3xl"
            mt={16}
            mb={6}
          >
            Branding
          </Heading>
          <Text pr={6} fontSize="2xl">
            {node.content.branding}
          </Text>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={16}>
              <Img
                fluid={node.images.branding[0].src.childImageSharp.fluid}
                alt=""
              />
            </Box>
          </ScrollAniFadeIn>
        </Box>
        <Box>
          <Heading
            fontFamily="montas-semibold"
            as="h3"
            size="3xl"
            mt={16}
            mb={6}
          >
            Web Design
          </Heading>
          <Text pr={6} fontSize="2xl">
            {node.content.design}
          </Text>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={16}>
              <Img
                fluid={node.images.design[0].src.childImageSharp.fluid}
                alt={node.images.design[0].alt}
              />
            </Box>
          </ScrollAniFadeIn>
          <ScrollAniFadeIn>
            <Box height="auto" overflow="hidden" my={16}>
              <Img
                fluid={node.images.design[1].src.childImageSharp.fluid}
                alt={node.images.design[1].alt}
              />
            </Box>
          </ScrollAniFadeIn>
        </Box>
        <Box>
          <Heading
            fontFamily="montas-semibold"
            as="h3"
            size="3xl"
            mt={16}
            mb={6}
          >
            Development
          </Heading>
          <Text pr={6} fontSize="2xl">
            {node.content.development}
          </Text>
          <Box width="300px" my={6}>
            <GatsbyLogo />
          </Box>
        </Box>
        <Box>
          <Heading
            fontFamily="montas-semibold"
            as="h3"
            size="3xl"
            mt={16}
            mb={6}
          >
            Business Integrations
          </Heading>
          <Text pr={6} fontSize="2xl">
            {node.content.business_integrations}
          </Text>
        </Box>
        <Flex mt={10} justifyContent="space-between">
          {previous ? (
            <LinkOne to={previous.path}>Last Case</LinkOne>
          ) : (
            <div></div>
          )}
          {next ? <LinkOne to={next.path}>Next Case</LinkOne> : <div></div>}
        </Flex>
      </Container>
    </Box>
  );
};

export default caseTemplate;
