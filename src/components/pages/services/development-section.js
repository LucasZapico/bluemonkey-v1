import React from 'react'
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react'
import GatsbyLogo from '../../../assets/logos/Gatsby-Logo.svg'
import ReactLogo from '../../../assets/logos/react-logo.svg'
import NextLogo from '../../../assets/logos/next-logo.svg'

const DevelopmentSection = () => {
  return (
    <Box
      py={20}
      minHeight="400px"
      height="auto"
      color="brand.one"
      backgroundColor="brand.five"
    >
      <Container maxW="container.xl">
        <Flex>
          <Box>
            <Heading
              as="h3"
              lineHeight="base"
              size="4xl"
              mb={20}
              pt={28}
              color="brand.one"
              variant="pri"
              leads
            >
              <a id="development">Development</a>
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap" mb={20}>
              <Box
                pr={{ base: 0, md: 6 }}
                flexGrow="1"
                flexBasis={{ base: '100%', md: '50%' }}
              >
                <Heading as="h5" mb={6} color="brand.one">
                  What we do
                </Heading>
                <Text
                  color="brand.zero"
                  maxWidth="500px"
                  lineHeight="base"
                  fontSize="xl"
                >
                  Performant development with React.js, Gatsby.js, Next.js,
                  Node.js and Python
                </Text>
                <UnorderedList mt={4}>
                  <ListItem>
                    Modern development frameworks, patterns and practices
                  </ListItem>
                  <ListItem>Blazing fast performance</ListItem>
                  <ListItem>Secure</ListItem>
                  <ListItem>Custom API integrations</ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          {/* <Box
                  p={20}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Box width="300px" my={6}>
                    <GatsbyLogo />
                  </Box>
                  <Box width="200px" my={6}>
                    <ReactLogo />
                  </Box>
                  <Box width="300px" my={6}>
                    <NextLogo />
                  </Box>
                </Box> */}
        </Flex>
      </Container>
    </Box>
  )
}

export default DevelopmentSection
