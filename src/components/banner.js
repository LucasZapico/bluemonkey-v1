import React, { useState } from 'react';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { CloseIcon } from '@chakra-ui/icons';

const Banner = () => {
  const [show, setshow] = useState('true');

  return show ? (
    <Flex
      position="fixed"
      minHeight="100px"
      width="100%"
      bottom="0px"
      zIndex="1"
      background="brand.six"
      p={4}
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box m={4}>
          <Heading as="h5" size="lg">
            $50 off all sessions and packages for the month of&nbsp;April
          </Heading>
        </Box>
        {/* <Box m={4}>
          <Link to="/schedule">
            <Button size="lg" px={8} variant="btnOne">
              Schedule a Free Consultation
            </Button>
          </Link>
        </Box> */}
      </Flex>
      <Button m={0} variant="none">
        <CloseIcon onClick={() => setshow(!setshow)} />
      </Button>
    </Flex>
  ) : (
    <div />
  );
};

export default Banner;
