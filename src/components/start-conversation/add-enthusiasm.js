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
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTransition, animated as a } from 'react-spring';

const AddEnthusiasm = ({ onSubmit, store }) => {
  const { register, handleSubmit, watch, errors, formState } = useForm({
    defaultValues: store,
    mode: 'all',
  });
  const [show, setShow] = useState(true);
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
            <a.div style={styles}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <GridItem
                  colSpan={{ base: '2', md: '1' }}
                  width={{ base: '100%', md: '60%' }}
                >
                  {' '}
                  {/* <FormControl color="brand.five" isInvalid={errors.firstname}> */}
                  <FormControl>
                    <FormLabel htmlFor="enthusiasm">Enthusiasm</FormLabel>
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack>
                        <Radio value="1">
                          You look like a great fit for our project. Let's Go!
                          🥳
                        </Radio>
                        <Radio value="2">
                          We're interested, let's chat and see if we align. 🤔
                        </Radio>
                        <Radio value="3">
                          I'm filling out all the forms I find. 🙃
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    {/* <FormErrorMessage>
              {errors.firstname && errors.firstname.message}
            </FormErrorMessage> */}
                  </FormControl>
                </GridItem>
              </form>
            </a.div>
          )
      )}
    </>
  );
};

export default AddEnthusiasm;
