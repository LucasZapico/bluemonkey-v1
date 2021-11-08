import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'


const TypeSection = () => {
  return (
    <Box backgroundColor="brand.zero" py={10}>
        <Container maxW="container.xl" position="relative">
          <Box positions="absolute" top="0px" left="0px">
            <Heading size="5xl" variant="pri">03</Heading>
          </Box>
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
              <Heading  as="h5">
                Typography Palette Curation and Enhancement
              </Heading>
              <Text >
                Typography is the art of making text clear and appealing. In
                business, it could do so much more.
              </Text>
              <Text >
                It could build brand identity, make your audience feel
                something, and communicate an idea. We’ll find the best fonts,
                colors, and sizes for all of your business needs.
              </Text>
            </Box>
            }
            right={
              <Box px={{ base: 2, md: 4 }}>
                
              </Box>
            }
          />
        </Container>
      </Box>
  )
}

export default TypeSection
