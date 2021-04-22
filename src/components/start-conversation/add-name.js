import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { useTransition, animated as a } from 'react-spring';

const AddName = (props) => {
  const [show, setShow] = useState(true);
  const { errors, register } = props;
  const validateName = (value) => {
    if (!value) {
      return 'Name is required';
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
              {/* // <FormControl isInvalid={errors.email}> */}
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={4}
                width={{ base: '100%', md: '60%' }}
              >
                <GridItem colSpan={{ base: '1', md: '1' }}>
                  {' '}
                  {/* <FormControl isInvalid={errors.firstname}> */}
                  <FormControl>
                    <FormLabel htmlFor="firstname">First name</FormLabel>
                    <Input
                      borderColor="brand.five"
                      color="brand.five"
                      name="firstname"
                      placeholder="First name"
                      ref={{
                        ...register('firstname', { validate: validateName }),
                      }}
                    />
                    {/* <FormErrorMessage>
                      {errors.firstname && errors.firstname.message}
                    </FormErrorMessage> */}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: '1', md: '1' }}>
                  <FormControl
                    // isInvalid={errors.lastname}
                    flexBasis={{ base: '100%', md: '50%' }}
                  >
                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                    <Input
                      borderColor="brand.five"
                      name="lastname"
                      placeholder="Last name"
                      ref={{
                        ...register('lastname', { validate: validateName }),
                      }}
                    />
                    {/* <FormErrorMessage>
                      {errors.lastname && errors.lastname.message}
                    </FormErrorMessage> */}
                  </FormControl>
                </GridItem>
              </Grid>
            </a.div>
          )
      )}
    </>
  );
};

export default AddName;
