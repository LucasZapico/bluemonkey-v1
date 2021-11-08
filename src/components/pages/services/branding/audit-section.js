import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'


const AuditSection = () => {
  return (
    <Box backgroundColor="brand.zero" py={10}>
        <Container maxW="container.xl">
        <Box positions="absolute" top="0px" left="0px">
            <Heading size="5xl" variant="pri" opacity="0.6" mb={0}>01</Heading>
          </Box>
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
                <Heading as="h3" variant="pri" size="2xl">Audits</Heading>
                <Heading as="h4" variant="sec" size="xl">What is a brand Audit?</Heading>
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
