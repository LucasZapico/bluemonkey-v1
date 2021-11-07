import React, { useEffect } from 'react'
import { Heading, Box, Container } from '@chakra-ui/react'

import { SGColorSection } from './sg-color-section'
import { SGButtonSection } from './sg-buttons-links'
import { SGContentSection } from './sg-typography'
// import { Tag } from '../../_index'

// const ElementsSection = () => (
//   <Box py={20}>
//     <Heading as="h3" size="2xl">
//       UI elements
//     </Heading>
//     <Box>
//       <Tag>Category one</Tag>
//       <Tag>Category Two</Tag>
//       <Tag>Category Three</Tag>
//     </Box>
//   </Box>
// )

const Styleguide = () => {
  return (
    <Box minHeight="100vh" py={20} backgroundColor="white">
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl" variant="ogg">
          StyleGuide
        </Heading>
        <Heading as="h2" variant="Alice" size="2xl" className="readable">
          Collections of common styles used throughout the project
        </Heading>

        <SGColorSection />
        <SGButtonSection />
        {/* <ElementsSection /> */}
        <SGContentSection />
      </Container>
    </Box>
  )
}

export default Styleguide
