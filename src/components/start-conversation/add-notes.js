import React, { useState } from 'react';

import {
  Box,
  Grid,
  GridItem,
  FormControl,
  Textarea,
  FormLabel,
  Input,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { useTransition, animated as a } from 'react-spring';

const AddNotes = (props) => {
  const [show, setShow] = useState(true);
  const { errors, register } = props;
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
              <FormControl width={{ base: '100%', md: '60%' }}>
                <FormLabel htmlFor="notes">Project Notes</FormLabel>
                <Textarea
                  borderColor="brand.five"
                  color="brand.five"
                  name="notes"
                  placeholder="Add a brief note about what you want to accomplish. For example, a site that reflect your brand better. Or more engagement on you website. "
                  ref={{ ...register('notes', { required: true }) }}
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

export default AddNotes;
