import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Alert, AlertIcon, Flex, AlertTitle } from '@chakra-ui/react';
import { BtnOne } from '../index';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useTransition, animated as a } from 'react-spring';

const AddName = ({ onSubmit, store, handleNext, handleBack }) => {
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    type: 'info',
    message: 'We need to know what to call you',
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
  const validateName = (value) => {
    if (!value) {
      setAlertMessage({
        type: 'warning',
        message: 'Name is required',
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
    if (alertMessage.type === 'success') {
      setIsDisabled(false);
    }
  }, [alertMessage]);

  useEffect(() => {
    if (store.firstname) {
      validateName(store.firstname);
    }
  }, []);

  const submitAndNext = (data) => {
    console.log('sub and next');
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
                  <div className="input-container ">
                    <Box
                      display="flex"
                      flexDirection={{ base: 'column', md: 'row' }}
                      className="add-name"
                    >
                      <div className="input-name">
                        <label htmlFor="firstname">First Name</label>
                        <input
                          id="firstname"
                          type="text"
                          placeholder="Steve"
                          {...register('firstname')}
                          onChange={(e) => validateName(e.target.value)}
                        />
                      </div>
                      <div className="input-name">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          onChange={(e) => validateName(e.target.value)}
                          id="lastname"
                          type="text"
                          placeholder="McQueen"
                          {...register('lastname')}
                        />
                      </div>
                    </Box>
                    <Alert
                      opacity="0.7"
                      backgroundColor="transparent"
                      status={alertMessage.type}
                    >
                      <AlertIcon />
                      <AlertTitle mr={2}>{alertMessage.message}</AlertTitle>
                    </Alert>
                  </div>
                  <Flex flexDirection={{ base: 'column-reverse', sm: 'row' }}>
                    <Box mt={4} mr={4}>
                      <button
                        className="dark btn-one"
                        onClick={() => handleBack()}
                      >
                        Back
                      </button>
                    </Box>
                    <Box mt={4}>
                      <input
                        className="dark btn-one"
                        type="submit"
                        value="Next"
                        disabled={isDisabled}
                      />
                      <ArrowForwardIcon />
                    </Box>
                  </Flex>
                </form>
              </Box>
            </a.div>
          )
      )}
    </>
  );
};

export default AddName;
