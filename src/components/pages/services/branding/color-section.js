import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'


const ColorSection = () => {
  return (
    <Box backgroundColor="brand.zero" py={10}>
        
        <Container maxW="container.xl" position="relative">
          <Box positions="absolute" top="0px" left="0px">
            <Heading size="5xl" variant="pri">04</Heading>
          </Box>
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
              <Heading as="h5">
                Color Palette Curation and Enhancement
              </Heading>
              <Text>
                Colors give off emotions in the minds of your target audience.
                Does your business’s color palette give off the right
                emotions?
              </Text>
              <Text>
                We’ll do the research and experimentation to make sure that
                your business is using the right colors to make sales and
                build relationships.
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

export default ColorSection
