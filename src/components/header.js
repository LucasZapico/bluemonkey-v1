import React, { useRef, useState } from 'react';
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
  Icon,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useSpring, animated as a } from 'react-spring';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../assets/blue-monkey-hanging.svg';

const ROUTES = [
  {
    name: 'Home',
    to: '/',
    id: 'KEN131',
  },
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
  const [show, setShow] = useState(false);
  const styles = useSpring({
    opacity: show ? 1 : 0,
    height: show ? '100vh' : '0vh',
  });
  return (
    <header>
      <Flex
        style={{ mixBlendMode: 'exclusion' }}
        display={{ base: 'flex', md: 'flex' }}
        overflow="hidden"
        width="100vw"
        position="fixed"
        background="brand.two"
        zIndex="10"
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

        <Flex
          alignItems="center"
          overflow="hidden"
          width={{ base: '0px', md: 'auto' }}
        >
          {ROUTES.map((r) => (
            <Box className="link-one dark" pr={4} key={`route${r.id}`}>
              <Link to={`${r.to}`}>{r.name}</Link>
            </Box>
          ))}
        </Flex>

        <Box
          onClick={() => setShow(!show)}
          width={{ base: 'auto', md: '0px' }}
          display={{ base: 'block', md: 'none' }}
          overflow="hidden"
          mr={4}
        >
          <Icon as={HamburgerIcon} w={6} h={6} />
        </Box>
      </Flex>
      <a.div
        style={{
          ...styles,
          position: 'fixed',
          top: '0px',
          zIndex: '100',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Flex
          height="100%"
          flexDirection="column"
          alignItems="center"
          overflow="hidden"
          bgGradient="linear(to-br, brand.one , brand.two )"
          pt={40}
          mt={20}
        >
          {ROUTES.map((r) => (
            <Box pr={4} key={`route${r.id}`}>
              <Heading
                as="h4"
                mb={10}
                size="2xl"
                onClick={() => setShow(!show)}
              >
                <Link to={`${r.to}`}>{r.name}</Link>
              </Heading>
            </Box>
          ))}
        </Flex>
      </a.div>
    </header>
  );
};

export default Header;
