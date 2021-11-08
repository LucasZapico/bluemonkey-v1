import React from 'react'
import {Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Flex, Box, Container, Heading, Text, Link } from '@chakra-ui/layout';
import moment from 'moment';

const SubFooter = ({baseUrl}) => {
  
  
  return(

    <Box pb={4} mt={20}>
    <Text fontSize="md" color="brand.zero" mb={0}>Last updated: {moment(Date()).format('l')}</Text>
    <Text mb={0} color="brand.zero" fontSize="sm">
      Copyright {baseUrl} {moment().format('y')}
    </Text>
    <Link fontSize="sm" as={GatsbyLink} mb={0} to="/privacy"  color="brand.zero">
      Privacy
    </Link>
  </Box>
  )
}


export default SubFooter

