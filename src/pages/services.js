import React, { useRef, useEffect, useState } from 'react'
import { Services } from '../components/index'
import { Box } from '@chakra-ui/react'
import BackgroundIll from '../assets/background.svg'

const ServicesPage = ({ data }) => {
  return (
    <Box py={40} position="relative">
      <Box zIndex="-1" position="absolute" top="0" left="0" width="100%">
    <BackgroundIll/>
    </Box>
      <Services />
    </Box>
  )
}

export default ServicesPage
