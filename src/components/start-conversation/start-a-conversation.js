import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, Container } from '@chakra-ui/react';
import { BtnOne } from '../links';
import { useForm } from 'react-hook-form';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import AddEmail from './add-email';
import AddName from './add-name';
import AddNotes from './add-notes';
import AddEnthusiasm from './add-enthusiasm';

const steps = ['email', 'name', 'notes', 'enthusiasm'];

const StartAConversation = () => {
  const { handleSubmit, errors, register, watch, formState } = useForm();
  const [current, setCurrent] = useState([0, steps[0]]);

  const handleNext = () => {
    if (current[0] !== steps.length - 1) {
      setCurrent((prev) => {
        return [prev[0] + 1, steps[prev[0] + 1]];
      });
    }
  };
  const handleBack = () => {
    if (current[0] !== 0) {
      setCurrent((prev) => {
        return [prev[0] - 1, steps[prev[0] - 1]];
      });
    }
  };

  useEffect(() => {
    console.log(`
    current: ${current}, 
    errors, ${errors}`);
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box width="100%" py={20}>
      <Container maxW="container.xl">
        <Box>
          <Heading size="4xl" fontFamily="montas-semibold" mb={6}>
            Start A Conversation
          </Heading>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          height="250px"
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
            name="start-a-conversation"
            onSubmit={handleSubmit(onSubmit)}
          >
            <>
              {current[1] === 'email' ? (
                <AddEmail register={register} errors={errors} />
              ) : (
                <div></div>
              )}
              {current[1] === 'name' ? (
                <AddName register={register} errors={errors} />
              ) : (
                <div></div>
              )}
              {current[1] === 'notes' ? (
                <AddNotes register={register} errors={errors} />
              ) : (
                <div></div>
              )}
              {current[1] === 'enthusiasm' ? (
                <AddEnthusiasm register={register} errors={errors} />
              ) : (
                <div></div>
              )}
            </>

            <Flex>
              {current[0] !== 0 ? (
                <BtnOne
                  colortype="dark"
                  mr={4}
                  onClick={() => handleBack()}
                  mt={6}
                  width="200px"
                >
                  Back
                  <ArrowBackIcon />
                </BtnOne>
              ) : (
                <div></div>
              )}
              {current[0] !== steps.length - 1 ? (
                <BtnOne
                  colortype="dark"
                  mt={6}
                  width="200px"
                  onClick={() => handleNext()}
                >
                  Next
                  <ArrowForwardIcon />
                </BtnOne>
              ) : (
                <div></div>
              )}

              {current[0] === steps.length - 1 ? (
                <BtnOne colortype="dark" mt={6} width="200px">
                  Submit
                  <ArrowForwardIcon />
                </BtnOne>
              ) : (
                <div></div>
              )}
            </Flex>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default StartAConversation;
