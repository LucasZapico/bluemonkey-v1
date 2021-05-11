import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Heading } from '@chakra-ui/react';
import {
  Layout,
  ScrollAniFadeIn,
  LinkOne,
  LinkEmail,
  LinkPhone,
} from '../components';
import { useSpring, animated as a } from 'react-spring';
import MonkeyThree from '../assets/monkey_3.svg';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';

const ContactPage = ({ data }) => {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onChange',
  });

  const onSubmit = async () => {
    setWaiting(true);
    console.log('submit all', store);
    const results = await axios
      .post('/leads', store, {
        baseURL: 'https://odwwt9.deta.dev',
        headers: {
          Accept: '*/*',
          'X-Forwarded-Host': 'odwwt9.deta.dev',
          'X-Forwarded-Proto': 'https',
          'X-Forwarded-Port': '443',
          'Content-Type': 'application/json',
          'X-Scheme': 'https',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        console.log(res);
        setWaiting(false);
        if (res.status === 200) {
          setAlertMessage({
            type: 'success',
            message: 'Thank you, we will be in touch you shortly.',
          });
          return 200;
        } else if (res.status === 401) {
          setAlertMessage({
            type: 'warning',
            message:
              'We already have your info. If you think we missed you, ping us on slack',
          });
          return 401;
        }
      })
      .catch((err) => {
        setWaiting(false);
        setAlertMessage({
          type: 'error',
          message:
            "Something went wrong. Please try again and if that doesn't work ping us on slack",
        });
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
              <ScrollAniFadeIn>
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
              </ScrollAniFadeIn>
            </Container>
          </Box>
          <Box color="brand.one" backgroundColor="brand.five" py={20}>
            <Container>
              <ScrollAniFadeIn>
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
              </ScrollAniFadeIn>
            </Container>
            <Container>
              <ScrollAniFadeIn>
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
                      {errors.email && <span>Email is required</span>}
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
                  <input className=" btn-one light" type="submit" />
                </form>
                <Heading as="h3" size="xl" mb={10} lineHeight="base"></Heading>
              </ScrollAniFadeIn>
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
