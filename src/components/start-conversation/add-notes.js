import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Grid,
  GridItem,
  Textarea,
  FormLabel,
  Flex,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { BtnOne } from '../index';
import { useTransition, animated as a } from 'react-spring';

const AddNotes = ({ onSubmit, store, handleNext, handleBack }) => {
  const [show, setShow] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState({
    type: 'info',
    message: 'A brief note on your goals will help us get the ball rolling',
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
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const validateNotes = (value) => {
    if (!value) {
      setAlertMessage({
        type: 'warning',
        message: 'A project note is required',
      });
    } else if (value.length > 10) {
      setAlertMessage({
        type: 'success',
        message: 'Looking good',
      });
    }
  };

  useEffect(() => {
    if (alertMessage.type === 'success') {
      setIsDisabled(false);
    }
  }, [alertMessage]);

  useEffect(() => {
    if (store.notes) {
      validateNotes(store.notes);
    }
  }, []);

  const submitAndNext = (data) => {
    handleNext();
    onSubmit(data);
  };

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <a.div style={styles}>
              <Box width={{ base: '100%', md: '60%' }}>
                <Box>
                  <form onSubmit={handleSubmit(submitAndNext)}>
                    <div className="input-container add-notes">
                      <label htmlFor="notes">Project Notes</label>
                      <textarea
                        id="notes"
                        placeholder="Add a brief note about what you want to accomplish. For example, a site that reflect your brand better. Or more engagement on you website. "
                        {...register('notes')}
                        onChange={(e) => validateNotes(e.target.value)}
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
              </Box>
            </a.div>
          )
      )}
    </>
  );
};

export default AddNotes;
