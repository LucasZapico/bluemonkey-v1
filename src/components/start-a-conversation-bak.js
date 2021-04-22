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
  Textarea,
  Heading,
  Container,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { LinkThree, LinkTwo, BtnOne } from './index';
import { CloseIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSpring, animated as a, useTransition } from 'react-spring';

const steps = ['email', 'name', 'notes', 'enthusiasm'];

const StartAConversation = () => {
  const { handleSubmit, errors, register, watch, formState } = useForm();
  const [current, setCurrent] = useState([0, steps[0]]);

  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
  // spring animations

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
    const formatedPhone = formatePhone(value);
    console.log('for', formatedPhone);

    if (!value) {
      return 'Phone is required';
    } else if (formatedPhone === null) {
      return 'Not valid phone number';
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

  const AddNotes = () => {
    return (
      <>
        <GridItem colSpan={{ base: '2', md: '1' }}>
          {' '}
          <FormControl color="brand.five" isInvalid={errors.firstname}>
            <FormLabel htmlFor="notes">Notes</FormLabel>
            <Textarea
              name="notes"
              placeholder="Project Notes"
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
      </>
    );
  };

  const AddEnthusiasm = () => {
    const [value, setValue] = React.useState('1');
    return (
      <>
        <GridItem colSpan={{ base: '2', md: '1' }}>
          {' '}
          <FormControl color="brand.five" isInvalid={errors.firstname}>
            <FormLabel htmlFor="enthusiasm">Enthusiasm</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack>
                <Radio value="1">
                  You look like a great fit for our project. Let's Go!
                </Radio>
                <Radio value="2">
                  We're interested, let chat and see if we align.
                </Radio>
                <Radio value="3">I'm filling out all the forms I find.</Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
      </>
    );
  };

  const AddName = () => {
    return (
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={{ base: '1', md: '1' }}>
          {' '}
          <FormControl isInvalid={errors.firstname}>
            <FormLabel htmlFor="firstname">First name</FormLabel>
            <Input
              borderColor="brand.five"
              name="firstname"
              placeholder="First name"
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: '1', md: '1' }}>
          <FormControl
            isInvalid={errors.lastname}
            flexBasis={{ base: '100%', md: '50%' }}
          >
            <FormLabel htmlFor="lastname">Last name</FormLabel>
            <Input
              borderColor="brand.five"
              name="lastname"
              placeholder="Last name"
              ref={register({ validate: validateName })}
            />
            <FormErrorMessage>
              {errors.lastname && errors.lastname.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
      </Grid>
    );
  };

  const AddEmail = () => {
    <FormControl isInvalid={errors.email}>
      <FormLabel color="brand.five" htmlFor="email">
        Email
      </FormLabel>
      <Input
        color="brand.five"
        borderColor="brand.five"
        height="80px"
        fontSize="40px"
        name="email"
        placeholder="email"
        ref={register({ validate: validateEmail })}
      />
      <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage>
    </FormControl>;
  };

  // const StepGroup = () => {
  //   const transitions = useTransition(current, {
  //     key: current[0],
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   });
  //   return;
  //   <>
  //     {current[1] === 'email' ? <AddEmail /> : <div></div>}
  //     {current[1] === 'name' ? <AddName /> : <div></div>}
  //     {current[1] === 'notes' ? <AddNotes /> : <div></div>}
  //     {current[1] === 'enthusiasm' ? <AddEnthusiasm /> : <div></div>}
  //   </>;
  // };

  const handleNext = () => {
    if (current[0] != steps.length - 1) {
      setCurrent((prev) => {
        return [prev[0] + 1, steps[prev[0] + 1]];
      });
    }
  };
  const handleBack = () => {
    if (current[0] !== 0) {
      setCurrent((prev) => {
        return [prev[0] - 1, steps[prev[0] - 1]];
      });
    }
  };

  useEffect(() => {
    return () => {};
  }, [alertMessage]);

  useEffect(() => {
    console.log(`
    current: ${current}`);
  });

  const onSubmitApi = async (data) => {
    const formatedPhone = formatePhone(data.phone);
    const results = await axios
      .post(
        '/schedule',
        { ...data, phone: formatedPhone },
        {
          // baseURL: 'https://lqaehc.deta.dev/',
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
  const onSubmit = (data) => console.log(data);
  return (
    <Box width="100%" py={20}>
      <Box>
        <Heading size="3xl" fontFamily="montas-semibold" mb={6}>
          Start A Conversation
        </Heading>
      </Box>
      <Box width="100%">
        <form
          name="start-a-conversation"
          width="100%"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <StepGroup /> */}
          <Flex>
            {current[0] !== 0 ? (
              <BtnOne
                colortype="dark"
                mr={4}
                onClick={() => handleBack()}
                mt={6}
                width="200px"
              >
                Back
                <ArrowBackIcon />
              </BtnOne>
            ) : (
              <div></div>
            )}
            {current[0] !== steps.length - 1 ? (
              <BtnOne
                colortype="dark"
                ml={4}
                mt={6}
                width="200px"
                onClick={() => handleNext()}
              >
                Next
                <ArrowForwardIcon />
              </BtnOne>
            ) : (
              <div></div>
            )}

            {current[0] === steps.length - 1 ? (
              <BtnOne colortype="dark" ml={4} mt={6} width="200px">
                Submit
                <ArrowForwardIcon />
              </BtnOne>
            ) : (
              <div></div>
            )}
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default StartAConversation;
