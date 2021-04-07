import React, { useState, useEffect } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Grid,
  GridItem,
  Input,
  Button,
  Flex,
  Heading,
  Container,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Layout } from '../components/index';

const formatePhone = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

const Schedule = () => {
  const { handleSubmit, errors, register, watch, formState } = useForm();
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
  // todo consolidate
  const validateName = (value) => {
    if (!value) {
      return 'Name is required';
    }
  };
  const validateEmail = (value) => {
    if (!value) {
      return 'Emails is required';
    }
  };
  const validatePhone = (value) => {
    if (!value) {
      return 'Phone is required';
    }
  };

  const AlertMessage = ({ message }) => (
    <Alert status={message.type}>
      <Flex justifyContent="space-between">
        <AlertIcon />
        <AlertTitle mr={2} />
        <AlertDescription>{message.message}</AlertDescription>
        <CloseIcon
          onClick={() => setAlertMessage({ type: 'warning', message: '' })}
          ml={4}
        />
      </Flex>
    </Alert>
  );

  useEffect(() => {
    return () => {};
  }, [alertMessage]);

  const onSubmit = async (data) => {
    const formatedPhone = formatePhone(data.phone);

    const results = await axios
      .post(
        '/schedule',
        { ...data, phone: formatedPhone },
        {
          baseURL: 'https://lqaehc.deta.dev/',
          headers: {
            Accept: '*/*',
            'X-Forwarded-Host': 'lqaehc.deta.dev',
            'X-Forwarded-Proto': 'https',
            'X-Forwarded-Port': '443',
            'Content-Type': 'application/json',
            'X-Scheme': 'https',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then((res) => {
        if (res.data.status === 200) {
          setAlertMessage({
            type: 'success',
            message: 'Thank you, we will be in touch you shortly.',
          });
          return 200;
        } else if (res.data.status === 401) {
          setAlertMessage({
            type: 'warning',
            message:
              'We already have your info. If you think we missed you, please call 415.747.1177',
          });
          return 401;
        }
      })
      .catch((err) => {
        setAlertMessage({
          type: 'error',
          message:
            "Something went wrong. Please try again and if that doesn't work please give us a call at 415.747.1177",
        });
      });
    return results;
  };
  return (
    <Layout>
      <Box bg="brand.one" minHeight="100vh" pt={20}>
        <Container
          bg="white"
          borderRadius="20px"
          p={6}
          mt={10}
          maxW="container.md"
        >
          <Heading as="h2" mb={6} size="2xl" fontFamily="alice">
            Get in touch
          </Heading>
          <Heading as="h5" size="md" mb={6}>
            We'll reach out within 24 hours of the next business day except
            holidays.
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={4}
              templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(2,1fr)' }}
            >
              <GridItem colSpan={{ base: '2', md: '1' }}>
                {' '}
                <FormControl isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <Input
                    name="firstname"
                    placeholder="First name"
                    ref={register({ validate: validateName })}
                  />
                  <FormErrorMessage>
                    {errors.firstname && errors.firstname.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: '2', md: '1' }}>
                <FormControl
                  isInvalid={errors.lastname}
                  flexBasis={{ base: '100%', md: '50%' }}
                >
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <Input
                    name="lastname"
                    placeholder="Last name"
                    ref={register({ validate: validateName })}
                  />
                  <FormErrorMessage>
                    {errors.lastname && errors.lastname.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: '2', md: '1' }}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    name="email"
                    placeholder="email"
                    ref={register({ validate: validateEmail })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: '2', md: '1' }}>
                {' '}
                <FormControl isInvalid={errors.phone}>
                  <FormLabel htmlFor="phone">phone</FormLabel>
                  <Input
                    name="phone"
                    placeholder="phone"
                    ref={register({ validate: validatePhone })}
                  />
                  <FormErrorMessage>
                    {errors.phone && errors.phone.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>
            {alertMessage.message !== '' ? (
              <AlertMessage message={alertMessage} />
            ) : undefined}
            <Button
              mt={4}
              size="lg"
              px={8}
              variant="btnOne"
              isLoading={formState.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Container>
      </Box>
    </Layout>
  );
};

export default Schedule;
