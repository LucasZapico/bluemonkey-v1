import React, { useRef } from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  Spacer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../assets/blue-monkey-hanging.svg';

const ROUTES = [
  // {
  //   name: 'Home',
  //   to: '/',
  //   id: 'KEN131',
  // },
  {
    name: 'Services',
    to: '/services',
    id: 'FW93FP',
  },
  {
    name: 'Our Work',
    to: '/cases',
    id: 'VEOWHV',
  },
  {
    name: 'About',
    to: '/about',
    id: '9PJZH8',
  },
];

const Header = () => {
  return (
    <>
      <Flex
        style={{ mixBlendMode: 'exclusion' }}
        display={{ base: 'flex', md: 'flex' }}
        overflow="hidden"
        width="100vw"
        position="fixed"
        background="brand.two"
        zIndex="1"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Box>
          <Link to="/">
            <Flex alignItems="center">
              <Logo width={50} height="auto" />
              <Heading as="h5" size="md" marginLeft={4}>
                Blue Monkey
              </Heading>
            </Flex>
          </Link>
        </Box>

        <Flex alignItems="center">
          {ROUTES.map((r) => (
            <Box pr={4} key={`route${r.id}`}>
              <Link to={`${r.to}`}>{r.name}</Link>
            </Box>
          ))}

          <Box>
            {/* <Heading as="h5" size="lg">
              111.111.111
            </Heading> */}

            {/* <Link to="/schedule">

          <Button size="lg" px={8} variant="btnOne">
            Schedule a Free 20 min Consultation
          </Button>
        </Link> */}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
