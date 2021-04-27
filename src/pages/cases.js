import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Layout, ScrollAniFadeIn, LinkOne } from '../components';
import { useSpring, animated as a } from 'react-spring';
import MonkeyThree from '../assets/monkey_3.svg';

const cases = [1, 2, 3, 4, 5];

const CasesPage = () => {
  return (
    <Layout>
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
        {cases.map((r) => (
          <Container>
            <ScrollAniFadeIn>{r}</ScrollAniFadeIn>
          </Container>
        ))}
      </Box>
    </Layout>
  );
};

export default CasesPage;
