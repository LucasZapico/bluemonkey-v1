import React, { useEffect, useState } from 'react';
import { Alert, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
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
    type: 'info',
    message: "We'll never share your email.",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: store,
    reValidateMode: 'onChange',
  });

  const watchAll = watch();
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
    if (store.email) {
      validateEmail(store.email);
    }
  }, []);

  useEffect(() => {
    if (alertMessage.type === 'success') {
      setIsDisabled(false);
    }
  }, [alertMessage]);

  const submitAndNext = (data) => {
    handleNext();
    onSubmit(data);
  };

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <a.div style={{ ...styles, height: '100%' }}>
              <Box width={{ base: '100%', md: '60%' }} height="100%">
                <form onSubmit={handleSubmit(submitAndNext)}>
                  <div className="add-email input-container">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="smcqueen@kingofcool.com"
                      {...register('email', { required: true, maxLength: 30 })}
                      onChange={(e) => validateEmail(e.target.value)}
                    />

                    <Alert
                      opacity="0.7"
                      backgroundColor="transparent"
                      status={alertMessage.type}
                    >
                      <AlertIcon />
                      <AlertTitle mr={2}>{alertMessage.message}</AlertTitle>
                    </Alert>
                  </div>

                  <Box mt={4}>
                    <input
                      className="dark btn-one"
                      type="submit"
                      value="Next"
                      disabled={isDisabled}
                    />
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
