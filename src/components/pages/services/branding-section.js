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
import { HalfByHalfSection } from '../../index'

const BrandingSection = () => {
  return (
    <Box
      minHeight="400px"
      height="auto"
      color="brand.one"
      backgroundColor="brand.five"
    >
      <Container maxW="container.xl">
        <Heading variant="pri" as="h3" mb={20} pt={28} size="4xl" color="brand.one">
          Branding
        </Heading>

        <Flex flexDirection="row" flexWrap="wrap" pb={20}>
          <Box mb={20}>
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
                Market competitiveness through unique brand differentiation
              </Text>
            </Box>
            <Box
              pr={{ base: 0, md: 6 }}
              flexGrow="1"
              flexBasis={{ base: '100%', md: '50%' }}
            >
              <UnorderedList mt={4}>
                <ListItem>Audits</ListItem>
                <ListItem>Mark and Logo enhancement</ListItem>
                <ListItem>Color palette curation and enhancement</ListItem>
                <ListItem>Typography palette curation and enhancement</ListItem>
                <ListItem>
                  Imagery and illustration curation and enhancement
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          {/* <Box
                    pr={{ base: 0, md: 6 }}
                    flexGrow="1"
                    flexBasis={{ base: '100%', md: '50%' }}
                    width={{ base: '100%', md: '50%' }}
                  >
                    <SliderOne slides={data.brandShowcaseImage.edges} />
                  </Box> */}
        </Flex>
      </Container>
    </Box>
  )
}

export default BrandingSection
