import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'


const MarkSection = () => {
  return (
    <Box backgroundColor="brand.zero" py={10}>
        <Container maxW="container.xl">
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
                <Heading as="h5" >
                  Mark and Logo Enhancement
                </Heading>
                <Text>
                  Does your business have a spot in your audience’s brain? Your
                  mark and logo need to cleverly portray emotion through color,
                  size, and design. Why? Because emotion sells.
                </Text>
                <Text>
                  We’ll carefully review and edit your mark and logo to make
                  sure your audience remembers you.
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

export default MarkSection
