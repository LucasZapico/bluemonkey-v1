import React, { useState } from 'react';

import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormErrorIcon,
  Flex,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { BtnOne } from '../index';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTransition, animated as a } from 'react-spring';

const AddEnthusiasm = ({ onSubmit, store, handleSubmitAll, handleBack }) => {
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
  const [value, setValue] = useState('1');

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <a.div style={{ ...styles, height: '100%' }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container add-enthusiasm">
                  {' '}
                  <label htmlFor="excited" className="radio">
                    <div className="radio-input">
                      <input
                        type="radio"
                        id="excited"
                        name="enthusiasm"
                        checked
                        {...register('enthusiasm')}
                      />
                      <div className="radio-control"></div>
                    </div>
                    <div className="radio-label">
                      {' '}
                      You look like a great fit for our project. Let's Go! 🥳
                    </div>
                  </label>
                  <label htmlFor="interested" className="radio">
                    <div className="radio-input">
                      <input
                        type="radio"
                        id="interested"
                        name="enthusiasm"
                        {...register('enthusiasm')}
                      />
                      <div className="radio-control"></div>
                    </div>
                    <div className="radio-label">
                      {' '}
                      We're interested, let's chat and see if we align. 🤔
                    </div>
                  </label>
                  <label htmlFor="imatroll" className="radio">
                    <div className="radio-input">
                      <input
                        type="radio"
                        id="imatroll"
                        name="enthusiasm"
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
                      value="Submit"
                    />
                    <ArrowForwardIcon />
                  </Box>
                </Flex>
              </form>
            </a.div>
          )
      )}
    </>
  );
};

export default AddEnthusiasm;
