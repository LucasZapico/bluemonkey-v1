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

const NavSideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();
  return (
    <>
      <Flex
        style={{ mixBlendMode: 'exclusion' }}
        display={{ base: 'flex', md: 'none' }}
        pos="fixed"
        alignItems="center"
        top="0px"
        bg="brand.one"
        width="100%"
        p={3}
        zIndex="10"
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
        <Spacer />
        <Box>
          <Button ref={btnRef} variant="link" onClick={onOpen} mt={4}>
            <HamburgerIcon h="auto" w={8} />
          </Button>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        size="md"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg="brand.one" pt={3}>
            <DrawerCloseButton mt={6} />

            <DrawerHeader>
              <Box>
                <Link to="/">
                  <Flex alignItems="center">
                    <Logo width={50} height="auto" />
                    <Heading as="h5" marginLeft={4} size="md">
                      Blue Monkey
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </DrawerHeader>

            <DrawerBody>
              <Flex flexDirection="column" justifyContent="start">
                <Box pr={4}>
                  <Link to="/schedule">Connect</Link>
                </Box>
                <Box>
                  <Heading as="h4" size="sm" my={3}>
                    Connect@BlueMonkey.com
                  </Heading>

                  <Heading as="h4" size="sm" mb={3}>
                    Earth
                  </Heading>
                  <Heading as="h4" size="sm" mb={3} />
                  <Heading as="h4" size="sm">
                    111.111.1111
                  </Heading>

                  {/* <Link to="/schedule">

          <Button size="lg" px={8} variant="btnOne">
            Schedule a Free 20 min Consultation
          </Button>
        </Link> */}
                </Box>
              </Flex>
            </DrawerBody>

            <DrawerFooter />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const Header = () => {
  return (
    <>
      <NavSideNav />
      <Flex
        style={{ mixBlendMode: 'exclusion' }}
        display={{ base: 'none', md: 'flex' }}
        overflow="hidden"
        width="100vw"
        position="fixed"
        background="brand.one"
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
          <Box pr={4}>
            <Link to="/schedule">Schedule</Link>
          </Box>
          <Box>
            <Heading as="h5" size="lg">
              111.111.111
            </Heading>

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
