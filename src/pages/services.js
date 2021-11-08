import React, { useRef, useEffect, useState } from 'react'
import { Services, SEO } from '../components/index'
import { Box } from '@chakra-ui/react'
import BackgroundIll from '../assets/background.svg'

const ServicesPage = ({ data }) => {
  const pageSeo = {
    seoTitle: 'Our Services',
    seoDescription: 'We brand, build, design, develop and integrate your digital operations so you can take care of you what you do best.',
    seoKeywords: '',
    seoImage: ''
  }

  return (
    <>
    <SEO title={pageSeo.seoTitle} description={pageSeo.seoDescription}/>
    <Box py={40} position="relative">
      <Box zIndex="-1" position="absolute" top="0" left="0" width="100%">
    <BackgroundIll/>
    </Box>
      <Services />
    </Box>
    </>
  )
}

export default ServicesPage
