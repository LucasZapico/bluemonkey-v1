import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Layout, ScrollAniFadeIn, LinkOne } from '../components';
import { useSpring, animated as a } from 'react-spring';
import MonkeyThree from '../assets/monkey_3.svg';

const AboutPage = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  const calc = (o) => `translateY(${o * (0.3 * -1)}px)`;

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    console.log(offset);
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Layout>
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
        <Box py={40} zIndex="3">
          <Container>
            <Heading
              as="h1"
              maxWidth="800px"
              fontFamily="montas-semibold"
              fontSize={{
                base: '90',
                sm: '90',
                md: '100',
                lg: '80',
                xl: '110',
              }}
              lineHeight="base"
              mb={20}
            >
              About The Monkeys
            </Heading>
          </Container>

          <Box ref={ref}>
            <Container>
              <ScrollAniFadeIn>
                <Heading as="h2" size="xl" mb={10} lineHeight="base">
                  We are a fully remote group of solvers and makers. Who turn
                  coffee solutions. 🤩
                </Heading>
              </ScrollAniFadeIn>
            </Container>

            <Container>
              <ScrollAniFadeIn>
                <Heading as="h3" size="3xl" mb={5} mt={10} lineHeight="base">
                  Mission
                </Heading>
                <Heading as="h3" size="xl" mb={10} lineHeight="base">
                  {/* Our mission is to make the digital side of your business
              competitive. */}
                  Our mission is to take the stress out of the digital side of
                  your business. So you can focus on your product or service.
                </Heading>
              </ScrollAniFadeIn>
            </Container>
            <Container>
              <ScrollAniFadeIn>
                <Heading as="h3" size="xl" mb={10} lineHeight="base">
                  We see this as a partnership where our job is to enable you to
                  succeed. Period. 😎
                </Heading>
              </ScrollAniFadeIn>
            </Container>
            <Container>
              <ScrollAniFadeIn>
                <Heading as="h3" size="3xl" mb={5} mt={10} lineHeight="base">
                  We're Here to Help
                </Heading>
                <Heading as="h3" size="xl" mb={10} lineHeight="base">
                  Have a question for us or just want to say hello. 👋{' '}
                  <LinkOne href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A">
                    Join our slack channel <ExternalLinkIcon />
                  </LinkOne>
                </Heading>
              </ScrollAniFadeIn>
            </Container>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AboutPage;
