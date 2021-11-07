import { Box, Flex, Heading } from '@chakra-ui/react'

import React from 'react'

const HalfByHalfSection = ({
  right,
  left,
  bgL = '',
  bgR = '',
  reverse = false,
  ...rest
}) => (
  <Flex
    {...rest}
    flexWrap="wrap"
    justifyContent="space-between"
    flexDir={reverse ? 'row-reverse' : 'row'}
  >
    <Box
      backgroundColor={bgL}
      padding={4}
      flexGrow="1"
      minWidth={{ base: 'auto', md: '450px' }}
      flexBasis={{ base: '100%', md: '50%' }}
    >
      {left}
    </Box>
    <Box
      backgroundColor={bgR}
      padding={4}
      minWidth={{ base: 'auto', md: '450px' }}
      flexGrow="1"
      flexBasis={{ base: '100%', md: '50%' }}
    >
      {right}
    </Box>
  </Flex>
)

export default HalfByHalfSection
