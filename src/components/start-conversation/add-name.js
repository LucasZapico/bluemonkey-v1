import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Alert,
  FormHelperText,
  AlertIcon,
  AlertTitle,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { useTransition, animated as a } from 'react-spring';

const AddName = ({ onSubmit, store }) => {
  const [show, setShow] = useState(true);
  const { register, handleSubmit, watch, errors, formState } = useForm({
    defaultValues: store,
  });
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });

  const validateName = (value) => {
    if (!value) {
      setAlertMessage({
        type: 'warning',
        message: 'Name is required',
      });
    } else {
      setAlertMessage({
        type: 'info',
        message: 'Looking good',
      });
    }
  };

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
            <a.div style={styles}>
              <Box width={{ base: '100%', md: '60%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {' '}
                  <FormControl>
                    {/* <FormControl> */}
                    <FormLabel htmlFor="firstname">First name</FormLabel>
                    <Input
                      borderColor="brand.five"
                      color="brand.five"
                      name="firstname"
                      placeholder="First name"
                      onChange={(e) => validateName(e.target.value)}
                      {...register('firstname', { required: true })}
                    />
                    <FormErrorMessage>
                      {errors.firstname && errors.firstname.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl flexBasis={{ base: '100%', md: '50%' }}>
                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                    <Input
                      borderColor="brand.five"
                      name="lastname"
                      placeholder="Last name"
                      onChange={(e) => validateName(e.target.value)}
                      {...register('lastname', { required: true })}
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
                        Don't fret your name is safe with us.
                      </FormHelperText>
                    )}
                  </FormControl>
                </form>
              </Box>
            </a.div>
          )
      )}
    </>
  );
};

export default AddName;
