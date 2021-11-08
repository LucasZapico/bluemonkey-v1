import { Container, Box, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { HalfByHalfSection } from '../../../index'
import AuditSection from './audit-section'
import MarkSection from './mark-section'
import TypeSection from './type-section'
import ColorSection from './color-section'

const Branding = () => {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl" variant="pri">
          Our Branding Services 
        </Heading>
      </Container>
      <AuditSection/>
      <MarkSection/>
      <TypeSection/>
      <ColorSection/>
      <Box py={10}>
        <Container maxW="container.xl">
          <HalfByHalfSection
            left={
              <Box px={{ base: 2, md: 4 }}>
                <Heading as="h5">
                  Imagery and Illustration Curation and Enhancement
                </Heading>
                <Text>
                  A picture is worth a thousand words. Brand imagery and
                  illustration could enhance the selling atmosphere. Whether it
                  be your website, your store, or a social media post — imagery
                  builds the environment.
                </Text>
              </Box>
            }
          />
        </Container>
      </Box>
    </Box>
  )
}

export default Branding
