import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { BtnOne } from '../index';
import { useForm } from 'react-hook-form';
import { useTransition, animated as a } from 'react-spring';

const emailRegexOne = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const AddEmail = ({ onSubmit, store, handleNext }) => {
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
  const { register, handleSubmit, watch, errors } = useForm();

  const validateEmail = (value) => {
    if (!value) {
      setAlertMessage({
        type: 'warning',
        message: 'Emails is required',
      });
    } else if (!emailRegex.test(value)) {
      setAlertMessage({
        type: 'warning',
        message: 'Not a valid email',
      });
    } else {
      setAlertMessage({
        type: 'success',
        message: 'Looking good',
      });
    }
  };

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    console.log('error', alertMessage);
    console.log('disabled', isDisabled);
  });

  useEffect(() => {
    if (alertMessage.type === 'success') {
      setIsDisabled(false);
    }
  }, [alertMessage]);

  const submitAndNext = () => {
    console.log('sub and next');
    handleNext();
    onSubmit();
  };

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <a.div style={styles}>
              <Box width={{ base: '100%', md: '60%' }}>
                <form onSubmit={handleSubmit(submitAndNext)}>
                  <FormControl>
                    {/* <FormControl> */}
                    <FormLabel color="brand.five" htmlFor="email">
                      Email
                    </FormLabel>
                    <Input
                      defaultValue=""
                      color="brand.five"
                      borderColor="brand.five"
                      height="80px"
                      fontSize={{ base: '30px', md: '40px' }}
                      name="email"
                      placeholder="email"
                      {...register('email', { required: true })}
                      onChange={(e) => validateEmail(e.target.value)}
                    />
                    {alertMessage.message !== '' ? (
                      <Alert
                        backgroundColor="transparent"
                        status={alertMessage.type}
                      >
                        <AlertIcon />
                        <AlertTitle>{alertMessage.message}</AlertTitle>
                      </Alert>
                    ) : (
                      <FormHelperText>
                        We'll never share your email.
                      </FormHelperText>
                    )}
                  </FormControl>

                  <Box
                    minWidth="200px"
                    cursor={isDisabled ? 'not-allowed' : 'pointer'}
                    opacity={isDisabled ? 0.3 : 1}
                    color="brand.five"
                    border="2px"
                    borderColor="brand.five"
                    mt={6}
                    py={4}
                    px={4}
                    as="button"
                  >
                    <input value="Next" type="submit"></input>
                    <ArrowForwardIcon />
                  </Box>
                </form>
              </Box>
            </a.div>
          )
      )}
    </>
  );
};

export default AddEmail;
