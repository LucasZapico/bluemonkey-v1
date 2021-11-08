import React from 'react'
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react'

const DesignSection = () => {
  return (
    <Box minHeight="400px" height="auto" py={20} mb={20}>
      <Container maxW="container.xl">
        <Heading variant="pri" as="h3" lineHeight="base" mb={20} pt={28} size="4xl" leads>
          <a id="design">Design</a>
        </Heading>
        <Flex flexDirection="row" flexWrap="wrap">
          <Box
            mb={20}
            pr={{ base: 0, md: 6 }}
            flexGrow="1"
            flexBasis={{ base: '100%', md: '50%' }}
          >
            <Heading as="h5" mb={6}>
              What we do
            </Heading>
            <Text maxWidth="500px" lineHeight="base" fontSize="xl">
              Custom web design tailored to business objectives
            </Text>
            <UnorderedList mt={4}>
              <ListItem>Custom content driven design</ListItem>
              <ListItem>
                Custom experiences around your unique audience
              </ListItem>
              <ListItem>Unique design that is not overly trendy</ListItem>
              <ListItem>
                Experiences driven by tested user experience research
              </ListItem>
            </UnorderedList>
          </Box>

          {/* <Box
          pr={{ base: 0, md: 6 }}
          flexGrow="1"
          flexBasis={{ base: '100%', md: '50%' }}
          width={{ base: '100%', md: '50%' }}
        >
          <SliderOne slides={data.designShowcaseImage.edges} />
        </Box> */}
        </Flex>
      </Container>
    </Box>
  )
}

export default DesignSection
