import React, { useEffect, useRef, useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Link,
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
import { Link as GatsbyLink } from 'gatsby';
import { useSpring, animated as a } from 'react-spring';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../../assets/mark/blue-monkey-hanging.svg';

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
  {
    name: 'Contact',
    to: '/contact',
    id: '0KJZH8',
  },
];

const Header = ({ location }) => {
  const [show, setShow] = useState(false);

  const styles = useSpring({
    opacity: show ? 1 : 0,
    height: show ? '100vh' : '0vh',
  });

  return (
    <header>
      <Flex
        // style={{ mixBlendMode: 'exclusion' }}
        display={{ base: 'flex', md: 'flex' }}
        overflow="hidden"
        width="100vw"
        position="fixed"
        background="brand.one"
        zIndex="100"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Box>
          
            <Flex to="/" as={GatsbyLink} alignItems="center">
              <Logo width={50} height="auto" />
              <Heading as="h5" size="md" marginLeft={4} mb={0}>
                Blue Monkey
              </Heading>
            </Flex>
          
        </Box>

        <Flex
          alignItems="center"
          overflow="hidden"
          py={2}
          width={{ base: '0px', md: 'auto' }}
        >
          {ROUTES.map((r) => (
              <Link  
              variant="linkOne"
              px={4}              
              key={`route${r.id}`}
              as={GatsbyLink} 
              to={`${r.to}`}>
                {r.name}
              </Link>
          ))}
        </Flex>

        <Box
          onClick={() => setShow(!show)}
          width={{ base: 'auto', md: '0px' }}
          display={{ base: 'block', md: 'none' }}
          overflow="hidden"
          zIndex="100"
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
          zIndex: '50',
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
          pt={20}
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
                <Link to="/" as={GatsbyLink} to={`${r.to}`}>{r.name}</Link>
              </Heading>
            </Box>
          ))}
        </Flex>
      </a.div>
    </header>
  );
};

export default Header;
