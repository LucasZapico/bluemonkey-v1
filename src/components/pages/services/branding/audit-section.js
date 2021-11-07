import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'


const AuditSection = () => {
  return (
    <Box backgroundColor="brand.zero" py={10}>
        <Container maxW="container.xl">
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
                <Heading as="h5">Audits</Heading>
                <Text>
                  Having trouble optimizing your business? Our team will look
                  over every aspect of your business. If something’s off, we’ll
                  let you know.
                </Text>
                <Text>
                  We research you, the competition, and the whole industry.
                  Great research means great results. When the competition is
                  stiff, everything matters, so that’s why we make sure
                  everything is just right.
                </Text>
              </Box>
            }
            right={
            <Box></Box>
            }
          />
        </Container>
      </Box>
  )
}

export default AuditSection
