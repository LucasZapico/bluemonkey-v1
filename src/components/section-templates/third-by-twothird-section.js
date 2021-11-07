import { Box, Flex } from '@chakra-ui/react'

import React from 'react'

const ThirdByTwoThirdSection = ({
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
      minWidth={{ base: 'auto' }}
      flexBasis={{ base: '100%', md: '66%' }}
    >
      {left}
    </Box>
    <Box
      backgroundColor={bgR}
      padding={4}
      minWidth={{ base: 'auto' }}
      flexGrow="1"
      flexBasis={{ base: '100%', md: '33%' }}
    >
      {right}
    </Box>
  </Flex>
)

export default ThirdByTwoThirdSection
