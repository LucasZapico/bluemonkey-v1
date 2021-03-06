import { Box, Container, Flex, Heading, Text, Link } from '@chakra-ui/react';
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosOpen,
} from 'react-icons/io';
import {  AnimatedFadeUpBox, SEO } from '../components';

import {GatsbyjsLogo} from '../assets/logos';
import Img from 'gatsby-image';
import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';

const caseTemplate = (props, location) => {
  const { element } = props.pageContext;
  const { previous, node, next } = element;

  const pageSeo = {
    seoTitle: `Case: ${node.content.title}`,
    seoDescription: `${node.content.summary}`,
    seoKeywords: '',
    seoImage: ''
  }
  
  
  
  return (
    <main>
      <SEO title={pageSeo.seoTitle} description={pageSeo.seoDescription}/>
      <Box py={40}>
        <Container maxW="container.md">
          <Heading
            as="h1"
            variant="pri"
            size="2xl"
            lineHeight="base"
            mb={16}
          >
            {node.content.title}
          </Heading>

          <Flex flexWrap="wrap">
            <Box flexBasis={{ base: '100%', md: '70%' }}>
              <Heading
                variant="pri" 
                as="h2"
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
            <Box flexBasis={{ base: '40%', md: '30%' }}>
              <Heading variant="pri"  mb={6} mt={16} as="h4">
                Services
              </Heading>
              {node.content.deliverables.map((s, i) => {
                return node.content.deliverables.length - 1 === i
                  ? s
                  : `${s}, `;
              })}
            </Box>
          </Flex>
          <Box>
            <Heading
              variant="pri" 
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
            
              <AnimatedFadeUpBox height="auto" overflow="hidden" my={16}>
                <Img
                  fluid={node.images.branding[0].src.childImageSharp.fluid}
                  alt=""
                />
              </AnimatedFadeUpBox>
            
          </Box>
          <Box>
            <Heading
              variant="pri" 
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
            <AnimatedFadeUpBox>
              <Box height="auto" overflow="hidden" my={16}>
                <Img
                  fluid={node.images.design[0].src.childImageSharp.fluid}
                  alt={node.images.design[0].alt}
                />
              </Box>
            </AnimatedFadeUpBox>
            <AnimatedFadeUpBox>
              <Box height="auto" overflow="hidden" my={16}>
                <Img
                  fluid={node.images.design[1].src.childImageSharp.fluid}
                  alt={node.images.design[1].alt}
                />
              </Box>
            </AnimatedFadeUpBox>
          </Box>
          <Box>
            <Heading
              variant="pri" 
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
              <GatsbyjsLogo />
            </Box>
          </Box>
          <Box>
            <Heading
              variant="pri" 
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
              <Link variant="linkOne" as={GatsbyLink} to={previous.path}>
                Last Case
              </Link>
            ) : (
              <div></div>
            )}
            {next ? (
              <Link variant="linkOne" as={GatsbyLink} to={next.path}>
                Next Case
              </Link>
            ) : (
              <div></div>
            )}
          </Flex>
        </Container>
      </Box>
    </main>
  );
};

export default caseTemplate;
