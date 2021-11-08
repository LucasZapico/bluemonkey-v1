import React, { useRef, useEffect, useState } from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby'
import { useTransition, animated, config } from 'react-spring'

import BrandingSection from './branding-section'
import DesignSection from './design-section'
import DevelopmentSection from './development-section'
import SearchEnginOptimized from './search-engin-optimized'
import BusinessIntegration from './business-integration'

const Words = ['COMPETITIVE', 'DISCOVERABLE', 'ENGAGING']

const Services = () => {
  const { brandShowcaseImage, designShowcaseImage } = useStaticQuery(query)
  const [index, set] = useState(0)

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1, position: 'static' },
    leave: { opacity: 0, position: 'absolute' },
    config: { duration: 1000 },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      set(state => (state + 1) % Words.length)
    }, 2000);
    return () => clearTimeout(interval);
    
  }, [])

  const AnimatedHeading = animated(Heading)

  return (
    <main>
      <Box>
        <Box >
          <Box >
            <Container maxW="container.xl" pb={20}>
              <Box maxW="800px">
              <Heading as="h1" size="5xl" variant="pri">
                Services
              </Heading>
              <Heading variant="sec" as="h2" size="2xl" mb={0}>
              We use our industry expertise to make your business
              </Heading>
              {transitions((styles, i) => (
                 <AnimatedHeading  color="brand.six" style={styles} display="inline" size="2xl">{Words[i]}</AnimatedHeading>
                  ))}
              </Box>
            </Container>
            <BrandingSection />
            <DesignSection />
            <DevelopmentSection />
            <SearchEnginOptimized />
            <BusinessIntegration />
          </Box>
        </Box>
      </Box>
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    brandShowcaseImage: allFile(
      filter: { relativePath: { regex: "images/showcase/brand/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
    designShowcaseImage: allFile(
      filter: { relativePath: { regex: "images/showcase/design/" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Services
