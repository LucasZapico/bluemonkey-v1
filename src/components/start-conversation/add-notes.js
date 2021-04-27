import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  Textarea,
  FormLabel,
  Flex,
  Input,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { BtnOne } from '../index';
import { useTransition, animated as a } from 'react-spring';

const AddNotes = ({ onSubmit, store }) => {
  const { register, handleSubmit, watch, errors, formState } = useForm({
    defaultValues: store,
    mode: 'all',
  });
  const [show, setShow] = useState(true);

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const validateNotes = (value) => {
    if (!value) {
      return 'Project notes required';
    }
  };

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <a.div style={styles}>
              <Box width={{ base: '100%', md: '60%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl isInvalid={errors.notes}>
                    <FormLabel htmlFor="notes">Project Notes</FormLabel>
                    <Flex flexDirection="column" width="100%">
                      <Textarea
                        flexBasis="200px"
                        flexGrow="1"
                        borderColor="brand.five"
                        color="brand.five"
                        name="notes"
                        placeholder="Add a brief note about what you want to accomplish. For example, a site that reflect your brand better. Or more engagement on you website. "
                        {...register('notes', { validate: validateNotes })}
                      />
                    </Flex>
                    <FormErrorMessage>
                      {errors.notes && errors.notes.message}
                    </FormErrorMessage>
                  </FormControl>
                </form>
              </Box>
            </a.div>
          )
      )}
    </>
  );
};

export default AddNotes;
