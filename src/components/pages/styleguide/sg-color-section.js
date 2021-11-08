
import React from 'react';
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from '@chakra-ui/react';

export const ColorPrimary = () => (
  <Flex flexWrap="wrap">
    
    <Box height="200px" width="200px" flexGrow="1" bg="brand.zero" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.one" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.two" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.three" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.four" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.five" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.six" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.seven" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.eight" />
    <Box height="200px" width="200px" flexGrow="1" bg="brand.nine" />
  </Flex>
);

export const ColorGrey = () => (
  <Flex flexWrap="wrap">
    <Box height="200px" flexGrow="1" bg="gray.100" />
    <Box height="200px" flexGrow="1" bg="gray.200" />
    <Box height="200px" flexGrow="1" bg="gray.300" />
    <Box height="200px" flexGrow="1" bg="gray.400" />
    <Box height="200px" flexGrow="1" bg="gray.500" />
    <Box height="200px" flexGrow="1" bg="gray.600" />
    <Box height="200px" flexGrow="1" bg="gray.700" />
    <Box height="200px" flexGrow="1" bg="gray.800" />
    <Box height="200px" flexGrow="1" bg="gray.900" />
  </Flex>
);
export const SGColorSection = () => (
  <Box py={20}>
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl">
        Color Palette
      </Heading>
      <Heading as="h4" variant="sec" size="lg">
        Primary
      </Heading>
      <ColorPrimary />
      <ColorGrey />
    </Box>
  </Box>
);
