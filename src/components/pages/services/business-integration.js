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
import MonkeyOne from '../../../assets/monkey_1.svg'

const BusinessIntegration = () => {
  return (
    <Box
      minHeight="400px"
      height="auto"
      color="brand.one"
      backgroundColor="brand.five"
    >
      <Container maxW="container.xl">
        <Flex display="flex" justifyContent="flex-end" flexWrap="wrap">
          <Box flexGrow="1" flexBasis={{ base: '100%', md: '50%' }}>
            <Heading
              as="h3"
              lineHeight="base"
              size="4xl"
              mb={20}
              pt={28}
              color="brand.one"
              variant="pri"
            >
              Business Integrations
            </Heading>
            <Flex flexDirection="row" flexWrap="wrap" pb={20}>
              <Box pr={{ base: 0, md: 6 }} flexGrow="1">
                <Heading as="h5" mb={6} color="brand.one">
                  What we do
                </Heading>
                <Text
                  color="brand.zero"
                  maxWidth="500px"
                  lineHeight="base"
                  fontSize="xl"
                >
                  We set up your business to succeed
                </Text>
                <UnorderedList mt={4}>
                  <ListItem>
                    Integrations with CMS (content management system)
                  </ListItem>
                  <ListItem>
                    Lead management CRM (customer relationship management)
                  </ListItem>
                  <ListItem>
                    Integrations and automatons with email marketing platforms
                  </ListItem>
                  <ListItem>
                    Ecommerce inventory and fulfillment management
                  </ListItem>
                  <ListItem>Booking management services</ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
          <Box
            pl={{ base: 0, md: 6 }}
            flexGrow="1"
            flexBasis={{ base: '0%', md: '50%' }}
            position="relative"
          >
            <Box
              position="absolute"
              right="0px"
              opacity={{ base: '.2', md: '.5' }}
              transform="scaleX(-1)"
            >
              <MonkeyOne />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default BusinessIntegration
