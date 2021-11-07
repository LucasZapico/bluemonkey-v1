import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading, Link } from '@chakra-ui/react';
import { AnimatedFadeUpBox, LinkOne } from '../components';
import { Link as GatsbyLink } from 'gatsby'
import { useSpring, animated as a } from 'react-spring';
import MonkeyThree from '../assets/monkey_3.svg';

const AboutPage = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const calc = (o) => `translateY(${o * (0.2 * -1)}px)`;

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;

    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Box position="relative">
      <Box
        zIndex="0"
        position="absolute"
        top="30%"
        left="0%"
        width="100%"
        height="100vh"
      >
        <a.div style={{ transform: offset.to(calc) }}>
          <Box opacity=".4">
            <MonkeyThree />
          </Box>
        </a.div>
      </Box>
      <main>
        <Box
          bgGradient="linear(to-b, brand.one , brand.two )"
          py={40}
          zIndex="3"
        >
          <Container maxW="container.md">
            <Heading
              as="h1"
              maxWidth="800px"
              variant="pri"
              size="4xl"
              lineHeight="base"
              mb={20}
            >
              About The Monkeys
            </Heading>
          </Container>

          <Box ref={ref}>
            <Container maxW="container.md">
              <AnimatedFadeUpBox showOffset="300">
                <Heading as="h2" size="xl" mb={10} lineHeight="base" variant="sec">
                  We are a fully remote group of solvers and makers. Who turn
                  coffee into solutions.
                </Heading>
              </AnimatedFadeUpBox>
            </Container>

            <Container maxW="container.md">
              <AnimatedFadeUpBox showOffset="300">
                <Heading as="h3" size="3xl" mb={5} mt={10} lineHeight="base">
                  Mission
                </Heading>
                <Heading as="h3" size="xl" mb={10} lineHeight="base" variant="sec">
                  {/* Our mission is to make the digital side of your business
              competitive. */}
                  Our mission is to take the stress out of the digital side of
                  your business. So you can focus on your product or service.
                </Heading>
              </AnimatedFadeUpBox>
            </Container>
            <Container maxW="container.md">
              <AnimatedFadeUpBox showOffset="300">
                <Heading as="h3" size="xl" mb={10} lineHeight="base" variant="sec">
                  We see this as a partnership where our job is to enable you to
                  succeed. Period.
                </Heading>
              </AnimatedFadeUpBox>
            </Container>
            <Container maxW="container.md">
              <AnimatedFadeUpBox showOffset="300">
                <Heading as="h3" size="3xl" mb={5} mt={10} lineHeight="base" >
                  We're Here to Help
                </Heading>
                <Box>
                <Heading display="inline" as="h3" size="xl" mb={10} lineHeight="base" variant="sec">
                  Have a question for us or just want to say hello. 👋{' '}
                  
                </Heading>
                <Heading display="inline" cursor="pointer"  size="xl" as={Link} variant="linkOne" href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A">
                    Join our slack channel <ExternalLinkIcon />
                  </Heading>
                  </Box>
              </AnimatedFadeUpBox>
            </Container>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default AboutPage;
