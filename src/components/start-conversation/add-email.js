import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTransition, animated as a } from 'react-spring';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const AddEmail = (props) => {
  const [show, setShow] = useState(true);
  const { errors, register } = props;
  // const { errors, register, formState } = useForm();
  const validateEmail = (value) => {
    if (!value) {
      return 'Emails is required';
    } else if (!emailRegex.test(value)) {
      return 'Not a valid email';
    } else return true;
  };
  const [alertMessage, setAlertMessage] = useState({
    type: 'warning',
    message: '',
  });
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
              {/* // <FormControl isInvalid={errors.email}> */}
              <FormControl>
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
                  ref={{ ...register('email', { required: true }) }}
                />
                {/* <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage> */}
              </FormControl>
            </a.div>
          )
      )}
    </>
  );
};

export default AddEmail;
