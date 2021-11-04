import React, { useEffect, useRef, useState } from 'react';
import { ExternalLinkIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Spinner,
  Box,
  Container,
  Heading,
  Alert,
  Flex,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { AnimatedFadeUpBox, LinkOne, LinkEmail, LinkPhone } from '../components';
import { useSpring, animated as a } from 'react-spring';
import MonkeyThree from '../assets/monkey_3.svg';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { axiosLeads} from '../api/axios'

const ContactPage = ({ data }) => {
  const ref = useRef();
  const [waiting, setWaiting] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
  // parallax effect
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

  // page metadata
  const { site } = data;
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    baseUrl,
    defaultImage,
    phone,
    twitterUsername,
  } = site.siteMetadata;

  // form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onChange',
  });

  const AlertMessage = ({ message }) => (
    <Alert status={message.type}>
      <Flex justifyContent="space-between">
        <AlertIcon />
        <AlertTitle mr={2} />
        <AlertDescription color="brand.six">{message.message}</AlertDescription>
        <CloseIcon
          color="brand.six"
          onClick={() => setAlertMessage({ type: 'warning', message: '' })}
          ml={4}
        />
      </Flex>
    </Alert>
  );

  const onSubmit = async (leadData) => {
    setWaiting(true);
    console.log('submit all', leadData);
    const results = await axiosLeads
      .post('/leads/add', leadData)
      .then((res) => {
        console.log('status', res.status);
        setWaiting(false);
        if (res.status === 200) {
          setAlertMessage({
            type: 'success',
            message: 'Thank you, we will be in touch you shortly.',
          });
          return 200;
        }
      })
      .catch((err) => {
        setWaiting(false);
        console.log('status', err.status);
        if (err.status === 401) {
          setAlertMessage({
            type: 'warning',
            message:
              'We already have your info. If you think we missed you, ping us on slack',
          });
          return 401;
        } else {
          setAlertMessage({
            type: 'error',
            message:
              "Something went wrong. Please try again and if that doesn't work ping us on slack",
          });
        }
      });
    return results;
  };

  return (
    <Box position="relative">
      {/* <Box
        zIndex="0"
        position="absolute"
        top="30%"
        left="0%"
        width="100%"
        height="100vh"
      >
        <a.div style={{ transform: offset.to(calc) }}>
          <Box opacity=".4"><MonkeyThree /> </Box>
        </a.div>
      </Box> */}
      <main>
        <Box
          bgGradient="linear(to-br, brand.one , brand.two )"
          py={40}
          zIndex="3"
        >
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
              Contact
            </Heading>
          </Container>

          <Box ref={ref}>
            <Container>
              <AnimatedFadeUpBox showOffset="300">
                <Heading as="h3" size="md" mb={10} lineHeight="base">
                  <LinkEmail>{`Connect@${baseUrl}`}</LinkEmail>
                </Heading>
                <Heading as="h3" size="md" mb={10} lineHeight="base">
                  <LinkPhone>{phone}</LinkPhone>
                </Heading>
                <Heading as="h3" size="md" mb={10} lineHeight="base">
                  <LinkOne href="https://join.slack.com/t/bluemonkey-group/shared_invite/zt-pgxxc4tc-B2KVEZkicybmpBdS3o6I4A">
                    👋 Join our slack channel <ExternalLinkIcon />
                  </LinkOne>
                </Heading>
                </AnimatedFadeUpBox>
            </Container>
          </Box>
          <Box color="brand.one" backgroundColor="brand.five" py={20}>
            <Container>
              <AnimatedFadeUpBox showOffset="300">
                <Heading
                  as="h3"
                  size="3xl"
                  mb={5}
                  color="brand.one"
                  mt={10}
                  fontFamily="montas-semibold"
                  lineHeight="base"
                >
                  Start A Conversation
                </Heading>
              </AnimatedFadeUpBox>
            </Container>
            <Container>
              <AnimatedFadeUpBox showOffset="300">
                <form
                  className="contact start-conversation"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Box
                    display="flex"
                    flexDirection={{ base: 'column' }}
                    className="add-name"
                  >
                    <div className="input-name">
                      <Heading
                        color="brand.one"
                        as="h5"
                        size="md"
                        mb={4}
                        lineHeight="base"
                      >
                        What is your name?
                      </Heading>
                      <label htmlFor="firstname">First Name</label>
                      <input
                        id="firstname"
                        type="text"
                        placeholder="Steve"
                        {...register('firstname', { required: true })}
                      />
                      {errors.firstname?.type === 'required' &&
                        'First name is required'}
                    </div>

                    <div className="input-name">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        id="lastname"
                        type="text"
                        placeholder="McQueen"
                        {...register('lastname', { required: true })}
                      />
                    </div>
                  </Box>
                  <Box my={6}>
                    <div className="add-email input-container">
                      <Heading
                        color="brand.one"
                        as="h5"
                        size="md"
                        mb={4}
                        lineHeight="base"
                      >
                        What is your email?
                      </Heading>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="smcqueen@kingofcool.com"
                        {...register('email', {
                          required: true,
                          maxLength: 45,
                        })}
                      />
                      {errors.email?.type === 'required' && 'email is required'}
                    </div>
                  </Box>
                  <Box my={4}>
                    <div className="input-container add-notes">
                      <Heading
                        color="brand.one"
                        as="h5"
                        size="md"
                        mb={4}
                        lineHeight="base"
                      >
                        Give us a brief idea of your project goals.
                      </Heading>
                      <label htmlFor="notes">Project Notes</label>
                      <textarea
                        id="notes"
                        placeholder="Add a brief note about what you want to accomplish. For example, a site that reflect your brand better. Or more engagement on you website. "
                        {...register('notes', {
                          required: true,
                          maxLength: 200,
                        })}
                      />
                      {errors.notes?.type === 'required' &&
                        'A brief project note is required'}
                    </div>
                  </Box>
                  <Box my={6}>
                    <div className="input-container add-enthusiasm">
                      <Heading
                        color="brand.one"
                        as="h5"
                        size="md"
                        mb={4}
                        lineHeight="base"
                      >
                        Give us an idea of how excited you are about our
                        partnership.
                      </Heading>
                      <label>What is your Enthusiasm</label>
                      <label htmlFor="excited" className="radio">
                        <div className="radio-input">
                          <input
                            type="radio"
                            id="excited"
                            value="excited"
                            checked
                            {...register('enthusiasm')}
                          />
                          <div className="radio-control"></div>
                        </div>
                        <div className="radio-label">
                          {' '}
                          Blue Monkey looks like a great fit for our project.
                          Let's Go! 🥳
                        </div>
                      </label>
                      <label htmlFor="interested" className="radio">
                        <div className="radio-input">
                          <input
                            type="radio"
                            id="interested"
                            value="interested"
                            {...register('enthusiasm')}
                          />
                          <div className="radio-control"></div>
                        </div>
                        <div className="radio-label">
                          {' '}
                          I'm interested Blue Monkey, let's chat and see if we
                          align. 🤔
                        </div>
                      </label>
                      <label htmlFor="imatroll" className="radio">
                        <div className="radio-input">
                          <input
                            type="radio"
                            id="imatroll"
                            value="imatroll"
                            {...register('enthusiasm')}
                          />
                          <div className="radio-control"></div>
                        </div>
                        <div className="radio-label">
                          {' '}
                          I'm filling out all the forms I find. 🙃
                        </div>
                      </label>
                    </div>
                  </Box>
                  {waiting ? (
                    <div className="light btn-one">
                      <Spinner size="sm" />
                    </div>
                  ) : (
                    <input
                      className="light btn-one"
                      type="submit"
                      value="Submit"
                    />
                  )}
                </form>
                <Box minheight="50px" mt={4}>
                  {alertMessage.message !== '' ? (
                    <AlertMessage
                      backgroundColor="transparent"
                      message={alertMessage}
                    />
                  ) : undefined}
                </Box>
                <Heading as="h3" size="xl" mb={10} lineHeight="base"></Heading>
              </AnimatedFadeUpBox>
            </Container>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ContactPage.defaultProps = {
  title: null,
  description: null,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        baseUrl
        description
        image
        phone
        siteUrl
        title
        titleTemplate
        twitterUsername
      }
    }
  }
`;
