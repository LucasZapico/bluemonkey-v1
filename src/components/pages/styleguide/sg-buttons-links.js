import React from 'react'
import {
  Text,
  Heading,
  Box,
  Container,
  Button,
  Link,
  Flex,
  Divider,
} from '@chakra-ui/react'
import { BoxButton } from '../../index'

const ButtonStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg">
      Buttons
    </Heading>
    <Box py={10}>
      <Button ml={4}>Default</Button>
      <Button ml={4} variant="btnCTA">
        Button CTA
      </Button>
      <Button ml={4} variant="btnOne">
        Button One
      </Button>
      <Button ml={4} variant="btnTwo">
        Button Two
      </Button>
    </Box>
    <Box py={10}>
      <Heading as="h5" variant="sec" size="md">
        Sizes
      </Heading>
      <Box>
        <Button ml={4} variant="btnOne" size="lg">
          Button One
        </Button>
        <Button ml={4} variant="btnOne" size="md">
          Button One
        </Button>
        <Button ml={4} variant="btnOne" size="sm">
          Button One
        </Button>
      </Box>
    </Box>
    <Box>
      <Heading as="h4" variant="sec" size="lg">
        Button Variants
      </Heading>
      <Box>
        <Button maxW="300px" as={BoxButton}>
          Box Button
        </Button>
      </Box>
      <Box py={10} backgroundColor="brand.five">
        <Button maxW="300px" as={BoxButton} colorType="light">
          Box Button
        </Button>
      </Box>
    </Box>
  </Box>
)

const LinkStyles = () => (
  <Box>
    <Heading as="h4" variant="sec" size="lg">
      Links
    </Heading>
    <Link href="/" ml={4}>
      Link
    </Link>
    <Link to="/styleguide" ml={4} variant="linkOne">
      Link One
    </Link>
    <Box py={6}>
      <Text>
        Quick: do{' '}
        <Link to="/" variant="linkInline">
          {' '}
          inline link
        </Link>
        you have a plan to become customized. Have you ever needed to
      </Text>
    </Box>
    <Box backgroundColor="brand.five" py={10}>
      <Link href="/" ml={4} variant="light">
        Link
      </Link>
      <Link to="/styleguide" ml={4} variant="linkOneLight">
        Link One
      </Link>
      <Box py={6}>
        <Text variant="light">
          Quick: do{' '}
          <Link to="/" variant="linkInlineLight">
            {' '}
            inline link
          </Link>
          you have a plan to become customized. Have you ever needed to
        </Text>
      </Box>
    </Box>
  </Box>
)

export const SGButtonSection = () => (
  <Box py={20}>
    <Divider />
    <Box py={10}>
      <Heading as="h3" size="2xl">
        Buttons and Links
      </Heading>
      <ButtonStyles />
      <LinkStyles />
    </Box>
  </Box>
)
