import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Flex,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { BtnOne } from '../links';
import { useForm } from 'react-hook-form';
import { ArrowForwardIcon, ArrowBackIcon, CloseIcon } from '@chakra-ui/icons';
import AddEmail from './add-email';
import AddName from './add-name';
import AddNotes from './add-notes';
import AddEnthusiasm from './add-enthusiasm';
import axios from 'axios';

const steps = ['email', 'name', 'notes', 'enthusiasm'];

const StartAConversation = () => {
  const [current, setCurrent] = useState([0, steps[0]]);
  const [store, setStore] = useState({});
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
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
  const handleNext = () => {
    if (current[0] !== steps.length - 1) {
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

  useEffect(() => {});

  const onSubmit = (data) => {
    console.log('on submit ran', data);
    setStore({
      ...store,
      ...data,
    });
    if (current[0] === steps.length - 1) {
      onSubmitAll();
    }
  };

  const onSubmitAll = async () => {
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
        setAlertMessage({
          type: 'error',
          message:
            "Something went wrong. Please try again and if that doesn't work ping us on slack",
        });
      });
    return results;
  };

  useEffect(() => {
    console.log('store', store);
  }, [store]);

  return (
    <Box width="100%" py={20}>
      <Container maxW="container.xl">
        <Box>
          <Heading size="3xl" fontFamily="montas-semibold" mb={6}>
            Start A Conversation
          </Heading>
        </Box>
        <Box className="start-conversation">
          <Box>
            Step {current[0] + 1} of {steps.length}
          </Box>
          <Box height="100%">
            {current[1] === 'email' ? (
              <AddEmail
                onSubmit={onSubmit}
                store={store}
                handleNext={handleNext}
              />
            ) : (
              <div></div>
            )}
            {current[1] === 'name' ? (
              <AddName
                onSubmit={onSubmit}
                store={store}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ) : (
              <div></div>
            )}
            {current[1] === 'notes' ? (
              <AddNotes
                onSubmit={onSubmit}
                store={store}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ) : (
              <div></div>
            )}
            {current[1] === 'enthusiasm' ? (
              <AddEnthusiasm
                onSubmit={onSubmit}
                store={store}
                handleBack={handleBack}
                handleSubmitAll={onSubmitAll}
              />
            ) : (
              <div></div>
            )}
          </Box>
        </Box>
        <Box height="50px">
          {alertMessage.message !== '' ? (
            <AlertMessage message={alertMessage} />
          ) : undefined}
        </Box>
      </Container>
    </Box>
  );
};

export default StartAConversation;
