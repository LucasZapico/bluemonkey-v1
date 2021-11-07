import React from 'react'
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react'

const SearchEnginOptimized = () => {
  return (
    <Box minHeight="400px" height="auto">
      <Container maxW="container.xl">
        <Heading variant="pri" as="h3" lineHeight="base" size="4xl" mb={20} pt={28}>
          <a id="search-engine-optimized">Search Engine Optimized</a>
        </Heading>
        <Flex flexDirection="row" flexWrap="wrap" pb={20}>
          <Box
            pr={{ base: 0, md: 6 }}
            flexGrow="1"
            flexBasis={{ base: '100%', md: '50%' }}
          >
            <Heading as="h5" mb={6}>
              What we do
            </Heading>
            <Text maxWidth="500px" lineHeight="base" fontSize="xl">
              We ensure your web presence is discoverable
            </Text>
            <UnorderedList mt={4}>
              <ListItem>Technical SEO for Google and Bing</ListItem>
              <ListItem>Google and Bing analytics integrations</ListItem>
              <ListItem>On page SEO</ListItem>
              <ListItem>Content strategy and copywriting</ListItem>
            </UnorderedList>
          </Box>
          <Box
            pl={{ base: 0, md: 6 }}
            flexGrow="1"
            flexBasis={{ base: '100%', md: '50%' }}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default SearchEnginOptimized
